const ChatsPrivateModel = require(__path_schemas + "chatPrivate");
const databaseConfig = require(__path_configs + "database");

module.exports = {
  listItems: (params, options = null) => {
    if (options.task == "list-items-by-privacy") {
      let sort = { created: "asc" };

      return ChatsPrivateModel.find({
        $or: [
          {
            room: params.room,
            username: params.currentUser,
          },
          {
            room: params.currentUser,
            username: params.room,
          },
        ],
      })
        .select("content created username avatar room")
        .sort(sort);
    }
  },
  countItem: (params, options = null) => {
    let objWhere = {};
    return ChatsPrivateModel.countDocuments(objWhere);
  },
  saveItem: (item, options = null) => {
    if (options.task == "add") {
      item.created = Date.now();
      return new ChatsPrivateModel(item).save();
    }
  },
};
