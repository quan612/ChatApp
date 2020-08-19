var express = require("express");
var router = express.Router();
const util = require("util");

const systemConfig = require(__path_configs + "system");
const notify = require(__path_configs + "notify");
const RSSSourcesModel = require(__path_models + "rssSources");
const RSSCategoryModel = require(__path_models + "rssCategory");
const TagsModel = require(__path_models + "tags");
// const ValidateArticle = require(__path_validates + "article");
const UtilsHelpers = require(__path_helpers + "utils");
const FileHelpers = require(__path_helpers + "file");
const ParamsHelpers = require(__path_helpers + "params");

const linkIndex = "/" + systemConfig.prefixAdmin + "/rssSources/";
const pageTitleIndex = "RSS Sources Management";
const pageTitleAdd = pageTitleIndex + " - Add";
const pageTitleEdit = pageTitleIndex + " - Edit";
const folderView = __path_views_admin + "pages/rssSources/";
// const uploadThumb = FileHelpers.upload("thumb", "article");

// List article
router.get("(/status/:status)?", async (req, res, next) => {
  let params = {};
  params.keyword = ParamsHelpers.getParam(req.query, "keyword", "");
  params.currentStatus = ParamsHelpers.getParam(req.params, "status", "all");
  params.sortField = ParamsHelpers.getParam(req.session, "sort_field", "name");
  params.sortType = ParamsHelpers.getParam(req.session, "sort_type", "asc");
  params.categoryID = ParamsHelpers.getParam(req.session, "category_id", "");

  //add tag id Params here to handle user tag select
  // params.tagID = ParamsHelpers.getParam(req.session, "tag_id", "");

  params.pagination = {
    totalItems: 1,
    totalItemsPerPage: 5,
    currentPage: parseInt(ParamsHelpers.getParam(req.query, "page", 1)),
    pageRanges: 3,
  };

  let statusFilter = await UtilsHelpers.createFilterStatus(
    params.currentStatus,
    "users"
  );

  let caterogyItems = [];
  let individualCategory = [];

  await RSSCategoryModel.listItemsInSelectbox().then((items) => {
    caterogyItems = [...items];
    individualCategory = items;
    caterogyItems.unshift({ _id: "allvalue", name: "All Category" });
  });

  await RSSSourcesModel.countItem(params).then((data) => {
    params.pagination.totalItems = data;
  });

  RSSSourcesModel.listItems(params).then((items) => {
    res.render(`${folderView}list`, {
      pageTitle: pageTitleIndex,
      items,
      statusFilter,
      caterogyItems,
      params,
      individualCategory,
    });
  });
});

// Change status
router.post("/change-status/:id/:status", (req, res, next) => {
  let currentStatus = ParamsHelpers.getParam(req.params, "status", "active");
  let id = ParamsHelpers.getParam(req.params, "id", "");

  RSSSourcesModel.changeStatus(id, currentStatus, { task: "update-one" }).then(
    (result) => {
      result._doc.currentUrl = req.baseUrl + "/";
      res.json(result);
    }
  );
});

// Change status - Multi
router.post("/change-status/:status", (req, res, next) => {
  let currentStatus = ParamsHelpers.getParam(req.params, "status", "active");

  RSSSourcesModel.changeStatus(req.body.cid, currentStatus, {
    task: "update-multi",
  }).then((result) => {
    req.flash(
      "success",
      util.format(notify.CHANGE_STATUS_MULTI_SUCCESS, result.n),
      false
    );
    res.redirect(linkIndex);
  });
});

// Change ordering - Multi
router.post("/change-ordering", (req, res, next) => {
  let cids = req.body.cid;
  let orderings = req.body.ordering;

  RSSSourcesModel.changeOrdering(cids, orderings, null).then((result) => {
    req.flash("success", notify.CHANGE_ORDERING_SUCCESS, false);
    res.redirect(linkIndex);
  });
});

// Delete
router.get("/delete/:id", async (req, res, next) => {
  let id = ParamsHelpers.getParam(req.params, "id", "");
  RSSSourcesModel.deleteItem(id, { task: "delete-one" }).then((result) => {
    req.flash("success", notify.DELETE_SUCCESS, false);
    res.redirect(linkIndex);
  });
});

// Delete - Multi
router.post("/delete", (req, res, next) => {
  RSSSourcesModel.deleteItem(req.body.cid, { task: "delete-mutli" }).then(
    (result) => {
      req.flash(
        "success",
        util.format(notify.DELETE_MULTI_SUCCESS, result.n),
        false
      );
      res.redirect(linkIndex);
    }
  );
});

// FORM
router.get("/form(/:id)?", async (req, res, next) => {
  let id = ParamsHelpers.getParam(req.params, "id", "");
  let item = {
    name: "",
    rssLink: "",
    status: "novalue",
    ordering: 0,
    category_id: "",
    category_name: "",
  };
  let errors = null;

  let categoryItems = [];

  await RSSCategoryModel.listItemsInSelectbox().then((items) => {
    categoryItems = items;
    categoryItems.unshift({ _id: "allvalue", name: "All Category" });
  });

  if (id === "") {
    // ADD
    res.render(`${folderView}form`, {
      pageTitle: pageTitleAdd,
      item,
      errors,
      categoryItems,
    });
  } else {
    // EDIT
    RSSSourcesModel.getItem(id).then((item) => {
      item.category_id = item.category.id;
      item.category_name = item.category.name;
      res.render(`${folderView}form`, {
        pageTitle: pageTitleEdit,
        item,
        errors,
        categoryItems,
      });
    });
  }
});

// SAVE = ADD EDIT
router.post("/save", (req, res, next) => {
  try {
    req.body = JSON.parse(JSON.stringify(req.body));

    let item = Object.assign(req.body);

    let taskCurrent =
      typeof item !== "undefined" && item.id !== "" ? "edit" : "add";

    // let errors = ValidateArticle.validator(req, errUpload, taskCurrent);
    let errors = [];

    if (errors.length > 0) {
      let pageTitle = taskCurrent == "add" ? pageTitleAdd : pageTitleEdit;

      let categoryItems = [];
      RSSCategoryModel.listItemsInSelectbox().then((items) => {
        categoryItems = items;
        categoryItems.unshift({ _id: "allvalue", name: "All Category" });
      });

      // if (taskCurrent == "edit") item.thumb = item.image_old;
      res.render(`${folderView}form`, {
        pageTitle,
        item,
        errors,
        categoryItems,
      });
    } else {
      let message =
        taskCurrent == "add" ? notify.EDIT_SUCCESS : notify.EDIT_SUCCESS;

      RSSSourcesModel.saveItem(item, { task: taskCurrent }).then((result) => {
        req.flash("success", message, false);
        res.redirect(linkIndex);
      });
    }
  } catch (error) {}
});

// SORT
router.get("/sort/:sort_field/:sort_type", (req, res, next) => {
  req.session.sort_field = ParamsHelpers.getParam(
    req.params,
    "sort_field",
    "ordering"
  );
  req.session.sort_type = ParamsHelpers.getParam(
    req.params,
    "sort_type",
    "asc"
  );
  res.redirect(linkIndex);
});

// FILTER CATEGORY
router.get("/filter-category/:category_id", (req, res, next) => {
  req.session.category_id = ParamsHelpers.getParam(
    req.params,
    "category_id",
    ""
  );
  res.redirect(linkIndex);
});

// Change category
router.post("/change-category/:rssSourceId/:categoryId", (req, res, next) => {
  let categoryId = ParamsHelpers.getParam(req.params, "categoryId", "");
  let rssSourceId = ParamsHelpers.getParam(req.params, "rssSourceId", "");

  RSSSourcesModel.changeCategory(rssSourceId, categoryId, null).then((result) =>
    res.json(result)
  );
});

module.exports = router;
