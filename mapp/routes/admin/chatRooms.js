var express = require("express");
var router = express.Router();
const util = require("util");

const systemConfig = require(__path_configs + "system");
const notify = require(__path_configs + "notify");
const ChatRoomsModel = require(__path_models + "chatRooms");

const ValidateChatRooms = require(__path_validates + "chatRooms");
const UtilsHelpers = require(__path_helpers + "utils");
const FileHelpers = require(__path_helpers + "file");
const ParamsHelpers = require(__path_helpers + "params");

const linkIndex = "/" + systemConfig.prefixAdmin + "/chatRooms/";
const pageTitleIndex = "Chat Rooms Management";
const pageTitleAdd = pageTitleIndex + " - Add";
const pageTitleEdit = pageTitleIndex + " - Edit";
const folderView = __path_views_admin + "pages/chatRooms/";
const uploadThumb = FileHelpers.upload("thumb", "chatRooms");

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
    pageRanges: 3,
  };

  let statusFilter = await UtilsHelpers.createFilterStatus(params.currentStatus, "chatRooms");

  await ChatRoomsModel.countItem(params).then((data) => {
    params.pagination.totalItems = data;
  });

  ChatRoomsModel.listItems(params).then((items) => {
    res.render(`${folderView}list`, {
      pageTitle: pageTitleIndex,
      items,
      statusFilter,
      params,
    });
  });
});

// Change status
router.get("/change-status/:id/:status", (req, res, next) => {
  let currentStatus = ParamsHelpers.getParam(req.params, "status", "active");
  let id = ParamsHelpers.getParam(req.params, "id", "");

  ChatRoomsModel.changeStatus(id, currentStatus, { task: "update-one" }).then((result) => {
    req.flash("success", notify.CHANGE_STATUS_SUCCESS, false);
    res.redirect(linkIndex);
  });
});

// Change status - Multi
router.post("/change-status/:status", (req, res, next) => {
  let currentStatus = ParamsHelpers.getParam(req.params, "status", "active");

  ChatRoomsModel.changeStatus(req.body.cid, currentStatus, { task: "update-multi" }).then((result) => {
    req.flash("success", util.format(notify.CHANGE_STATUS_MULTI_SUCCESS, result.n), false);
    res.redirect(linkIndex);
  });
});

// Change ordering - Multi
router.post("/change-ordering", (req, res, next) => {
  let cids = req.body.cid;
  let orderings = req.body.ordering;

  ChatRoomsModel.changeOrdering(cids, orderings, null).then((result) => {
    req.flash("success", notify.CHANGE_ORDERING_SUCCESS, false);
    res.redirect(linkIndex);
  });
});

// Delete
router.get("/delete/:id", async (req, res, next) => {
  let id = ParamsHelpers.getParam(req.params, "id", "");
  ChatRoomsModel.deleteItem(id, { task: "delete-one" }).then((result) => {
    req.flash("success", notify.DELETE_SUCCESS, false);
    res.redirect(linkIndex);
  });
});

// Delete - Multi
router.post("/delete", (req, res, next) => {
  ChatRoomsModel.deleteItem(req.body.cid, { task: "delete-mutli" }).then((result) => {
    req.flash("success", util.format(notify.DELETE_MULTI_SUCCESS, result.n), false);
    res.redirect(linkIndex);
  });
});

// FORM
router.get("/form(/:id)?", async (req, res, next) => {
  let id = ParamsHelpers.getParam(req.params, "id", "");
  let item = { name: "", ordering: 0, status: "novalue" };
  let errors = null;

  if (id === "") {
    // ADD
    res.render(`${folderView}form`, { pageTitle: pageTitleAdd, item, errors });
  } else {
    // EDIT
    ChatRoomsModel.getItem(id).then((item) => {
      res.render(`${folderView}form`, { pageTitle: pageTitleEdit, item, errors });
    });
  }
});

// SAVE = ADD EDIT
router.post("/save", (req, res, next) => {
  uploadThumb(req, res, async (errUpload) => {
    req.body = JSON.parse(JSON.stringify(req.body));

    let item = Object.assign(req.body);
    let taskCurrent = typeof item !== "undefined" && item.id !== "" ? "edit" : "add";

    let errors = ValidateChatRooms.validator(req, errUpload, taskCurrent);

    if (errors.length > 0) {
      let pageTitle = taskCurrent == "add" ? pageTitleAdd : pageTitleEdit;
      if (req.file != undefined) FileHelpers.remove("public/uploads/chatRooms/", req.file.filename); // xóa tấm hình khi form không hợp lệ

      if (taskCurrent == "edit") item.thumb = item.image_old;
      res.render(`${folderView}form`, { pageTitle, item, errors });
    } else {
      let message = taskCurrent == "add" ? notify.EDIT_SUCCESS : notify.EDIT_SUCCESS;
      if (req.file == undefined) {
        // không có upload lại hình
        item.thumb = item.image_old;
      } else {
        item.thumb = req.file.filename;
        if (taskCurrent == "edit") FileHelpers.remove("public/uploads/chatRooms/", item.image_old);
      }

      ChatRoomsModel.saveItem(item, { task: taskCurrent }).then((result) => {
        req.flash("success", message, false);
        res.redirect(linkIndex);
      });
    }
  });
});

// SORT
router.get("/sort/:sort_field/:sort_type", (req, res, next) => {
  req.session.sort_field = ParamsHelpers.getParam(req.params, "sort_field", "ordering");
  req.session.sort_type = ParamsHelpers.getParam(req.params, "sort_type", "asc");
  res.redirect(linkIndex);
});

module.exports = router;
