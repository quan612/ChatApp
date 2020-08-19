const ChatsInRoomModel = require(__path_schemas + "chatInRooms");
const databaseConfig = require(__path_configs + "database");

module.exports = {
  listItems: (params, options = null) => {
    if (options.task == "list-items-by-room") {
      let objWhere = { room: params.room };
      let sort = { created: "asc" };
      return ChatsInRoomModel.find(objWhere).select("content created username avatar").sort(sort);
    }
  },

  countItem: (params, options = null) => {
    let objWhere = {};
    return ChatsInRoomModel.countDocuments(objWhere);
  },

  saveItem: (item, options = null) => {
    if (options.task == "add") {
      item.created = Date.now();
      return new ChatsInRoomModel(item).save();
    }
  },
};
