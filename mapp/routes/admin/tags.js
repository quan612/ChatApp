var express = require("express");
var router = express.Router();
const util = require("util");

const systemConfig = require(__path_configs + "system");
const notify = require(__path_configs + "notify");
const TagsModel = require(__path_models + "tags");
const ArticleModel = require(__path_models + "article");
//const ValidateCategory= require(__path_validates + 'category');
const UtilsHelpers = require(__path_helpers + "utils");
const ParamsHelpers = require(__path_helpers + "params");

const linkIndex = "/" + systemConfig.prefixAdmin + "/tags/";
const pageTitleIndex = "Tags Management";
// const pageTitleAdd   = pageTitleIndex + ' - Add';
const pageTitleEdit = pageTitleIndex + " - Edit";
const folderView = __path_views_admin + "pages/tags/";

// List Tags
router.get("(/status/:status)?", async (req, res, next) => {
  let params = {};
  params.keyword = ParamsHelpers.getParam(req.query, "keyword", "");
  params.currentStatus = ParamsHelpers.getParam(req.params, "status", "all");
  params.sortField = ParamsHelpers.getParam(req.session, "sort_field", "name");
  params.sortType = ParamsHelpers.getParam(req.session, "sort_type", "asc");
  params.pagination = {
    totalItems: 1,
    totalItemsPerPage: 5,
    currentPage: parseInt(ParamsHelpers.getParam(req.query, "page", 1)),
    pageRanges: 3
  };

  let statusFilter = await UtilsHelpers.createFilterStatus(
    params.currentStatus,
    "tags"
  );

  await TagsModel.countItem(params).then(data => {
    params.pagination.totalItems = data;
  });

  TagsModel.listItems(params).then(async items => {
    let countArticle = await ArticleModel.countOnTag(items);

    res.render(`${folderView}list`, {
      pageTitle: pageTitleIndex,
      items,
      statusFilter,
      params,
      countArticle
    });
  });
});

// Change status
router.get("/change-status/:id/:status", (req, res, next) => {
  let currentStatus = ParamsHelpers.getParam(req.params, "status", "active");
  let id = ParamsHelpers.getParam(req.params, "id", "");

  TagsModel.changeStatus(id, currentStatus, { task: "update-one" }).then(
    result => {
      req.flash("success", notify.CHANGE_STATUS_SUCCESS);
      res.redirect(linkIndex);
    }
  );
});

// Change status - Multi
router.post("/change-status/:status", (req, res, next) => {
  let currentStatus = ParamsHelpers.getParam(req.params, "status", "active");

  TagsModel.changeStatus(req.body.cid, currentStatus, {
    task: "update-multi"
  }).then(result => {
    req.flash(
      "success",
      util.format(notify.CHANGE_STATUS_MULTI_SUCCESS, result.n)
    );
    res.redirect(linkIndex);
  });
});

// Change ordering - Multi
router.post("/change-ordering", (req, res, next) => {
  let cids = req.body.cid;
  let orderings = req.body.ordering;

  TagsModel.changeOrdering(cids, orderings, null).then(result => {
    req.flash("success", notify.CHANGE_ORDERING_SUCCESS);
    res.redirect(linkIndex);
  });
});

// Delete
router.get("/delete/:id", (req, res, next) => {
  let id = ParamsHelpers.getParam(req.params, "id", "");

  TagsModel.deleteItem(id, { task: "delete-one" }).then(result => {
    // update all articles to remove the same tag
    ArticleModel.saveItem(id, { task: "delete-tag" }).then(result => {
      req.flash("success", notify.EDIT_SUCCESS);
      res.redirect(linkIndex);
    });
  });
});

// Delete - Multi
router.post("/delete", (req, res, next) => {
  TagsModel.deleteItem(req.body.cid, { task: "delete-mutli" }).then(result => {
    // update all articles to remove the same tag
    ArticleModel.saveItem(req.body.cid, { task: "delete-tag" }).then(result => {
      req.flash("success", notify.EDIT_SUCCESS);
      res.redirect(linkIndex);
    });
  });
});

// FORM
router.get("/form(/:id)?", (req, res, next) => {
  let id = ParamsHelpers.getParam(req.params, "id", "");
  let item = { name: "", status: "novalue" };
  let errors = null;
  if (id === "") {
    // ADD
    res.render(`${folderView}form`, { pageTitle: pageTitleAdd, item, errors });
  } else {
    // EDIT
    TagsModel.getItem(id).then(item => {
      res.render(`${folderView}form`, {
        pageTitle: pageTitleEdit,
        item,
        errors
      });
    });
  }
});

// SAVE = ADD EDIT
router.post("/save", (req, res, next) => {
  req.body = JSON.parse(JSON.stringify(req.body));
  // ValidateCategory.validator(req);

  let item = Object.assign(req.body);
  let errors = req.validationErrors();

  let taskCurrent =
    typeof item !== "undefined" && item.id !== "" ? "edit" : "add";

  if (errors) {
    let pageTitle = taskCurrent == "add" ? pageTitleAdd : pageTitleEdit;
    res.render(`${folderView}form`, { pageTitle, item, errors });
  } else {
    let message =
      taskCurrent == "add" ? notify.EDIT_SUCCESS : notify.EDIT_SUCCESS;
    TagsModel.saveItem(item, { task: taskCurrent }).then(result => {
      if (taskCurrent == "add") {
        req.flash("success", message);
        res.redirect(linkIndex);
      } else if (taskCurrent == "edit") {
        // update all articles  with same tags
        ArticleModel.saveItem(item, { task: "change-tag-name" }).then(
          result => {
            req.flash("success", notify.EDIT_SUCCESS);
            res.redirect(linkIndex);
          }
        );
      }
    });
  }
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

// No need
// router.get("/change-group-acp/:id/:group_acp", (req, res, next) => {
//   let currentGroupACP = ParamsHelpers.getParam(req.params, "group_acp", "yes");
//   let id = ParamsHelpers.getParam(req.params, "id", "");

//   TagsModel.changeGroupACP(currentGroupACP, id, null).then(result => {
//     req.flash("success", notify.CHANGE_GROUP_ACP_SUCCESS);
//     res.redirect(linkIndex);
//   });
// });

module.exports = router;
