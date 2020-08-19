var express = require("express");
var router = express.Router();

var passport = require("passport");

const StringHelpers = require(__path_helpers + "string");
const systemConfig = require(__path_configs + "system");

const middleGetUserInfo = require(__path_middleware + "get-user-info");

const folderView = __path_views_chat + "pages/auth/";
const layoutLogin = __path_views_chat + "login";
const layoutChat = __path_views_chat + "main";
const linkIndex = StringHelpers.formatLink("/" + systemConfig.prefixChat + "/");
const linkLogin = StringHelpers.formatLink("/" + systemConfig.prefixChat + "/auth/login/");
const ValidateLogin = require(__path_validates + "login");

/* GET logout page. */
router.get("/logout", function (req, res, next) {
  req.logout();
  res.redirect(linkLogin);
});

/* GET login page. */
router.get("/login", function (req, res, next) {
  if (req.isAuthenticated()) res.redirect(linkIndex);

  let item = { email: "", password: "" };
  let errors = null;
  res.render(`${folderView}login`, { layout: layoutLogin, errors, item });
});

/* GET dashboard page. */
router.get("/no-permission", middleGetUserInfo, function (req, res, next) {
  res.render(`${folderView}no-permission`, { layout: layoutChat, top_post: false });
});

/* POST login page. */
router.post("/login", function (req, res, next) {
  if (req.isAuthenticated()) res.redirect(linkIndex);

  req.body = JSON.parse(JSON.stringify(req.body));
  ValidateLogin.validator(req);

  let item = Object.assign(req.body);
  let errors = req.validationErrors();

  if (errors) {
    res.render(`${folderView}login`, { layout: layoutLogin, item, errors });
  } else {
    passport.authenticate("local", {
      successRedirect: linkIndex,
      failureRedirect: linkLogin,
      failureFlash: true,
    })(req, res, next);
  }
});

module.exports = router;
