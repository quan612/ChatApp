const TagsModel = require(__path_schemas + "tags");
const ArticleModel = require(__path_schemas + "article");

module.exports = {
  listItems: (params, options = null) => {
    let objWhere = {};
    let sort = {};
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    sort[params.sortField] = params.sortType;

    return TagsModel.find(objWhere)
      .select("id name created modified status")
      .sort(sort)
      .skip(
        (params.pagination.currentPage - 1) *
          params.pagination.totalItemsPerPage
      )
      .limit(params.pagination.totalItemsPerPage);
  },

  listItemsFrontend: (params = null, options = null) => {
    let find = { status: "active" };
    let select = "id name status";
    let sort = { ordering: "asc" };

    return TagsModel.find(find)
      .select(select)
      .sort(sort);
  },

  listItemsInSelectbox: (params, options = null) => {
    return TagsModel.find({}, { _id: 1, name: 1 });
  },

  getItem: (id, options = null) => {
    return TagsModel.findById(id);
  },

  getItemByName: (name, options = null) => {
    return TagsModel.find({ name });
  },

  countItem: (params, options = null) => {
    let objWhere = {};

    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return TagsModel.countDocuments(objWhere);
  },

  changeStatus: (id, currentStatus, options = null) => {
    let status = currentStatus === "active" ? "inactive" : "active";
    let data = {
      status: status,
      modified: {
        user_id: 0,
        user_name: 0,
        time: Date.now()
      }
    };

    if (options.task == "update-one") {
      return TagsModel.updateOne({ _id: id }, data);
    }

    if (options.task == "update-multi") {
      data.status = currentStatus;
      return TagsModel.updateMany({ _id: { $in: id } }, data);
    }
  },

  findTagAndCreate: async (tags, options = null) => {
    let result = [];
    let tagArray = tags.split(",");

    for (let index = 0; index < tagArray.length; index++) {
      let currentTag = await TagsModel.find({ name: tagArray[index] }).select(
        "id name status"
      );

      if (currentTag.length < 1) {
        const newTag = await module.exports.saveItem(
          { name: tagArray[index] },
          { task: "add" }
        );

        result = [...result, newTag];
      } else {
        result = [...result, currentTag[0]];
      }
    }
    return result;
  },

  deleteItem: (id, options = null) => {
    if (options.task == "delete-one") {
      return TagsModel.deleteOne({ _id: id });
    }

    if (options.task == "delete-mutli") {
      return TagsModel.deleteMany({ _id: { $in: id } });
    }
  },

  saveItem: (item, options = null) => {
    if (options.task == "add") {
      item.status = "active";
      item.created = {
        user_id: 0,
        user_name: "admin",
        time: Date.now()
      };

      return new TagsModel(item).save();
    }

    if (options.task == "edit") {
      return TagsModel.updateOne(
        { _id: item.id },
        {
          name: item.name,
          status: item.status,
          modified: {
            user_id: 0,
            user_name: 0,
            time: Date.now()
          }
        }
      );
    }
  }
};
