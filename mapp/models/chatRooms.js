const ChatRoomsModel = require(__path_schemas + "chatRooms");
const FileHelpers = require(__path_helpers + "file");
const uploadFolder = "public/uploads/chatRooms/";

module.exports = {
  listItems: (params, options = null) => {
    let objWhere = {};
    let sort = {};
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    sort[params.sortField] = params.sortType;

    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return ChatRoomsModel.find(objWhere)
      .select("name thumb status ordering created modified group.name")
      .sort(sort)
      .skip((params.pagination.currentPage - 1) * params.pagination.totalItemsPerPage)
      .limit(params.pagination.totalItemsPerPage);
  },

  listItemsForFrontend: () => {
    let objWhere = { status: "active" };
    let sort = { ordering: "asc" };

    return ChatRoomsModel.find(objWhere).select("name thumb").sort(sort);
  },

  getItemForFrontend: (id, options = null) => {
    return ChatRoomsModel.findById(id).select("name thumb");
  },

  getItem: (id, options = null) => {
    return ChatRoomsModel.findById(id);
  },

  countItem: (params, options = null) => {
    let objWhere = {};
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return ChatRoomsModel.countDocuments(objWhere);
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
      return ChatRoomsModel.updateOne({ _id: id }, data);
    }

    if (options.task == "update-multi") {
      data.status = currentStatus;
      return ChatRoomsModel.updateMany({ _id: { $in: id } }, data);
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
        await ChatRoomsModel.updateOne({ _id: cids[index] }, data);
      }
      return Promise.resolve("Success");
    } else {
      return ChatRoomsModel.updateOne({ _id: cids }, data);
    }
  },

  deleteItem: async (id, options = null) => {
    if (options.task == "delete-one") {
      await ChatRoomsModel.findById(id).then((item) => {
        FileHelpers.remove(uploadFolder, item.avatar);
      });
      return ChatRoomsModel.deleteOne({ _id: id });
    }

    if (options.task == "delete-mutli") {
      if (Array.isArray(id)) {
        for (let index = 0; index < id.length; index++) {
          await ChatRoomsModel.findById(id[index]).then((item) => {
            FileHelpers.remove(uploadFolder, item.avatar);
          });
        }
      } else {
        await ChatRoomsModel.findById(id).then((item) => {
          FileHelpers.remove(uploadFolder, item.avatar);
        });
      }
      return ChatRoomsModel.deleteMany({ _id: { $in: id } });
    }
  },

  saveItem: (item, options = null) => {
    if (options.task == "add") {
      item.created = {
        user_id: 0,
        user_name: "admin",
        time: Date.now(),
      };
      return new ChatRoomsModel(item).save();
    }

    if (options.task == "edit") {
      return ChatRoomsModel.updateOne(
        { _id: item.id },
        {
          ordering: parseInt(item.ordering),
          name: item.name,
          status: item.status,
          thumb: item.thumb,
          modified: {
            user_id: 0,
            user_name: 0,
            time: Date.now(),
          },
        }
      );
    }
  },
};
