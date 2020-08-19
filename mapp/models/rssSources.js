const RSSSourcesModel = require(__path_schemas + "rssSources");
const RSSCategoryModel = require(__path_models + "rssCategory");

const mongoose = require("mongoose");
module.exports = {
  listItems: (params, options = null) => {
    let objWhere = {};
    let sort = {};
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    sort[params.sortField] = params.sortType;

    // in case a category is selected
    if (params.categoryID !== "allvalue" && params.categoryID !== "")
      objWhere["category.id"] = params.categoryID;

    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return RSSSourcesModel.find(objWhere)
      .select(
        "name rssLink status ordering created modified category.name category.id"
      )
      .sort(sort)
      .skip(
        (params.pagination.currentPage - 1) *
          params.pagination.totalItemsPerPage
      )
      .limit(params.pagination.totalItemsPerPage);
  },

  listItemsFrontend: (params = null, options = null) => {
    let find = {};
    let select = "name rssLink category.id category.name";
    let sort = "";

    if (options.task == "items-active-only") {
      find = {
        status: "active",
      };
    }

    if (options.task == "items-filter-ids") {
      find = {
        status: "active",
        _id: { $in: params },
      };
    }

    if (options.task == "items-in-category") {
      select = "name rssLink created.user_name created.time category.name ";
      find = { status: "active", "category.id": params.id };
      sort = { "created.time": "desc" };
    }

    if (options.task == "items-others") {
      select =
        "name rssLink created.user_name created.time category.id category.name ";
      find = {
        status: "active",
        _id: { $ne: params._id },
        "category.id": params.category.id,
      };
      sort = { "created.time": "desc" };
    }

    return RSSSourcesModel.find(find).select(select).sort(sort);
  },

  getItem: (id, options = null) => {
    return RSSSourcesModel.findById(id);
  },

  getItemFrontend: (id, options = null) => {
    return RSSSourcesModel.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "tags",
          localField: "tags._id",
          foreignField: "_id",
          as: "tags",
        },
      },
    ]);
  },

  countItem: (params, options = null) => {
    let objWhere = {};
    if (params.categoryID !== "allvalue" && params.categoryID !== "")
      objWhere["category.id"] = params.categoryID;
    if (params.currentStatus !== "all") objWhere.status = params.currentStatus;
    if (params.keyword !== "") objWhere.name = new RegExp(params.keyword, "i");

    return RSSSourcesModel.countDocuments(objWhere);
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
      //return RSSSourcesModel.updateOne({ _id: id }, data);
      return RSSSourcesModel.findOneAndUpdate({ _id: id }, data, { new: true });
    }

    if (options.task == "update-multi") {
      data.status = currentStatus;
      return RSSSourcesModel.updateMany({ _id: { $in: id } }, data);
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
        await RSSSourcesModel.updateOne({ _id: cids[index] }, data);
      }
      return Promise.resolve("Success");
    } else {
      return RSSSourcesModel.updateOne({ _id: cids }, data);
    }
  },

  deleteItem: async (id, options = null) => {
    if (options.task == "delete-one") {
      return RSSSourcesModel.deleteOne({ _id: id });
    }

    if (options.task == "delete-mutli") {
      return RSSSourcesModel.deleteMany({ _id: { $in: id } });
    }
  },

  saveItem: async (item, options = null) => {
    if (options.task == "add") {
      try {
        item.created = {
          user_id: 0,
          user_name: "admin",
          time: Date.now(),
        };
        item.category = {
          id: item.category_id,
          name: item.category_name,
        };

        return new RSSSourcesModel(item).save();
      } catch (error) {}
    }

    if (options.task == "edit") {
      return RSSSourcesModel.updateOne(
        { _id: item.id },
        {
          ordering: parseInt(item.ordering),
          name: item.name,
          status: item.status,
          rssLink: item.rssLink,
          content: item.content,

          category: {
            id: item.category_id,
            name: item.category_name,
          },
          modified: {
            user_id: 0,
            user_name: 0,
            time: Date.now(),
          },
        }
      );
    }

    if (options.task == "change-category-name") {
      return RSSSourcesModel.updateMany(
        { "category.id": item.id },
        {
          category: {
            id: item.id,
            name: item.name,
          },
        }
      );
    }
  },

  changeCategory: async (id, categoryId, options = null) => {
    // find category based on categoryId
    let category = await RSSCategoryModel.getItem(categoryId);

    let data = {
      category: {
        id: category.id,
        name: category.name,
      },
      modified: {
        user_id: 0,
        user_name: 0,
        time: Date.now(),
      },
    };

    return RSSSourcesModel.findOneAndUpdate({ _id: id }, data, { new: true });
  },
};
