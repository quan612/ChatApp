var express = require("express");
var router = express.Router();

const folderView = __path_views_admin + "pages/dashboard/";

/* GET dashboard page. */
router.get("/", function (req, res, next) {
  //console.log(req.session.cookie.maxAge);
  res.render(`${folderView}index`, {
    pageTitle: "Dashboard Page",
    courseName: "<p>NodeJS</p>",
  });
});

module.exports = router;
