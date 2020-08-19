const RSSCategoryModel = require(__path_schemas + "rssCategory");
const StringHelpers = require(__path_helpers + "string");

module.exports = {
  listItems: (params, options = null) => {
    let objWhere = {};
    let sort = {};
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    sort[params.sortField] = params.sortType;

    return RSSCategoryModel.find(objWhere)
      .select("name status ordering created modified slug")
      .sort(sort)
      .skip(
        (params.pagination.currentPage - 1) *
          params.pagination.totalItemsPerPage
      )
      .limit(params.pagination.totalItemsPerPage);
  },

  listItemsFrontend: (params = null, options = null) => {
    let find = {};
    let select = "name";
    let limit = 10;
    let sort = "";

    if (options.task == "items-in-menu") {
      find = { status: "active" };
      sort = { ordering: "asc" };
    }

    if (options.task == "items-filter-ids") {
      find = { status: "active", _id: { $in: params } };
      sort = { ordering: "asc" };
    }

    return RSSCategoryModel.find(find).select(select).limit(limit).sort(sort);
  },

  listItemsInSelectbox: (params, options = null) => {
    return RSSCategoryModel.find({}, { _id: 1, name: 1 });
  },

  getItem: (id, options = null) => {
    return RSSCategoryModel.findById(id);
  },

  countItem: (params, options = null) => {
    let objWhere = {};

    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return RSSCategoryModel.countDocuments(objWhere);
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
      return RSSCategoryModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
    }

    if (options.task == "update-multi") {
      data.status = currentStatus;
      return RSSCategoryModel.updateMany({ _id: { $in: id } }, data);
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
        await RSSCategoryModel.updateOne({ _id: cids[index] }, data);
      }
      return Promise.resolve("Success");
    } else {
      return RSSCategoryModel.updateOne({ _id: cids }, data);
    }
  },

  deleteItem: (id, options = null) => {
    if (options.task == "delete-one") {
      return RSSCategoryModel.deleteOne({ _id: id });
    }

    if (options.task == "delete-mutli") {
      return RSSCategoryModel.remove({ _id: { $in: id } });
    }
  },

  saveItem: (item, options = null) => {
    if (options.task == "add") {
      item.created = {
        user_id: 0,
        user_name: "admin",
        time: Date.now(),
      };
      item.slug = StringHelpers.createAlias(item.slug);
      return new RSSCategoryModel(item).save();
    }

    if (options.task == "edit") {
      return RSSCategoryModel.updateOne(
        { _id: item.id },
        {
          ordering: parseInt(item.ordering),
          name: item.name,
          status: item.status,
          content: item.content,
          slug: StringHelpers.createAlias(item.slug),
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
