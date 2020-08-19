const UsersModel = require(__path_schemas + "users");
const FileHelpers = require(__path_helpers + "file");
const uploadFolder = "public/uploads/users/";
var md5 = require("md5");

module.exports = {
  checkCondition: (item, options = null) => {
    if (options.task == "check-add-friend") {
      return UsersModel.findOne({
        username: item.sender, // admin
        "requestTo.username": { $eq: item.receiver }, // nobita
      });
    }
  },

  listItems: (params, options = null) => {
    let objWhere = {};
    let sort = {};
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    sort[params.sortField] = params.sortType;

    if (params.groupID !== "allvalue" && params.groupID !== "") objWhere["group.id"] = params.groupID;
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return UsersModel.find(objWhere)
      .select("name avatar status ordering created modified group.name")
      .sort(sort)
      .skip((params.pagination.currentPage - 1) * params.pagination.totalItemsPerPage)
      .limit(params.pagination.totalItemsPerPage);
  },

  listItemsChat: (params, options = null) => {
    let objWhere = { status: "active" };

    return UsersModel.find(objWhere).select(
      "username name id avatar status ordering created modified group.name"
    );
  },

  getItem: (id, options = null) => {
    return UsersModel.findById(id);
  },

  getItemByUsername: (username, options = null) => {
    if (options == null) {
      return UsersModel.find({ status: "active", username: username }).select(
        "username password avatar status group.name"
      );
    }
  },

  countItem: (params, options = null) => {
    let objWhere = {};
    if (params.groupID !== "allvalue" && params.groupID !== "") objWhere["group.id"] = params.groupID;
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return UsersModel.countDocuments(objWhere);
  },

  changeStatus: (id, currentStatus, options = null) => {
    let status = currentStatus === "active" ? "inactive" : "active";
    let data = {
      status: status,
      modified: {
        user_id: 0,
        user_name: 0,
        time: Date.now(),
      },
    };

    if (options.task == "update-one") {
      return UsersModel.updateOne({ _id: id }, data);
    }

    if (options.task == "update-multi") {
      data.status = currentStatus;
      return UsersModel.updateMany({ _id: { $in: id } }, data);
    }
  },

  changeOrdering: async (cids, orderings, options = null) => {
    let data = {
      ordering: parseInt(orderings),
      modified: {
        user_id: 0,
        user_name: 0,
        time: Date.now(),
      },
    };

    if (Array.isArray(cids)) {
      for (let index = 0; index < cids.length; index++) {
        data.ordering = parseInt(orderings[index]);
        await UsersModel.updateOne({ _id: cids[index] }, data);
      }
      return Promise.resolve("Success");
    } else {
      return UsersModel.updateOne({ _id: cids }, data);
    }
  },

  deleteItem: async (id, options = null) => {
    if (options.task == "delete-one") {
      await UsersModel.findById(id).then((item) => {
        FileHelpers.remove(uploadFolder, item.avatar);
      });
      return UsersModel.deleteOne({ _id: id });
    }

    if (options.task == "delete-mutli") {
      if (Array.isArray(id)) {
        for (let index = 0; index < id.length; index++) {
          await UsersModel.findById(id[index]).then((item) => {
            FileHelpers.remove(uploadFolder, item.avatar);
          });
        }
      } else {
        await UsersModel.findById(id).then((item) => {
          FileHelpers.remove(uploadFolder, item.avatar);
        });
      }
      return UsersModel.deleteMany({ _id: { $in: id } });
    }
  },

  saveItem: async (item, options = null) => {
    if (options.task == "add") {
      item.created = {
        user_id: 0,
        user_name: "admin",
        time: Date.now(),
      };
      item.group = {
        id: item.group_id,
        name: item.group_name,
      };

      return new UsersModel(item).save();
    }

    if (options.task == "edit") {
      return UsersModel.updateOne(
        { _id: item.id },
        {
          ordering: parseInt(item.ordering),
          name: item.name,
          status: item.status,
          content: item.content,
          avatar: item.avatar,
          group: {
            id: item.group_id,
            name: item.group_name,
          },
          modified: {
            user_id: 0,
            user_name: 0,
            time: Date.now(),
          },
        }
      );
    }

    if (options.task == "change-group-name") {
      return UsersModel.updateMany(
        { "group.id": item.id },
        {
          group: {
            id: item.id,
            name: item.name,
          },
        }
      );
    }

    if (options.task == "sender-friend-request") {
      return UsersModel.updateOne(
        {
          username: item.sender,
          "requestTo.username": { $ne: item.receiver },
          "friendList.username": { $ne: item.receiver },
        },
        {
          $push: {
            requestTo: {
              username: item.receiver,
              avatar: item.receiverAvatar,
            },
          },
        }
      );
    }

    if (options.task == "receiver-friend-request") {
      return UsersModel.updateOne(
        {
          username: item.receiver,
          "requestFrom.username": { $ne: item.sender },
          "friendList.username": { $ne: item.sender },
        },
        {
          $push: {
            requestFrom: {
              username: item.sender,
              avatar: item.senderAvatar,
            },
          },
          $inc: {
            totalRequest: +1,
          },
        }
      );
    }

    if (options.task == "add-friend-deny-receiver") {
      return UsersModel.updateOne(
        {
          username: item.receiver,
        },
        {
          $pull: {
            requestFrom: {
              username: item.sender,
            },
          },
          $inc: {
            totalRequest: -1,
          },
        }
      );
    }

    if (options.task == "add-friend-deny-sender") {
      return UsersModel.updateOne(
        {
          username: item.sender,
        },
        {
          $pull: {
            requestTo: { username: item.receiver },
          },
        }
      );
    }

    if (options.task == "add-friend-accept-receiver") {
      return UsersModel.updateOne(
        {
          username: item.receiver,
          "friendList.username": { $ne: item.sender },
        },
        {
          $push: {
            friendList: {
              username: item.sender,
              avatar: item.senderAvatar,
            },
          },
          $pull: {
            requestFrom: {
              username: item.sender,
            },
          },
          $inc: {
            totalRequest: -1,
          },
        }
      );
    }

    if (options.task == "add-friend-accept-sender") {
      return UsersModel.updateOne(
        {
          username: item.sender,
          "friendList.username": { $ne: item.receiver },
        },
        {
          $push: {
            friendList: {
              username: item.receiver,
              avatar: item.receiverAvatar,
            },
          },
          $pull: {
            requestTo: { username: item.receiver },
          },
        }
      );
    }

    if (options.task == "unread-message") {
      await UsersModel.updateOne(
        {
          username: item.receiver,
        },
        {
          $pull: {
            unreadMessage: {
              username: item.sender,
            },
          },
        }
      );

      return await UsersModel.updateOne(
        {
          username: item.receiver,
        },
        {
          $push: {
            unreadMessage: {
              username: item.sender,
              avatar: item.senderAvatar,
              content: item.content,
              created: item.created,
            },
          },
        }
      );
    }
  },
};
