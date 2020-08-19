var express = require("express");
var router = express.Router();

const middlewareGetRSSCategorySidebar = require(__path_middleware +
  "getRSSCategoryForSidebar");

const middlewareGetRSSSourcesSidebar = require(__path_middleware +
  "getRSSSourcesForSidebar");

router.use(
  "/",
  middlewareGetRSSCategorySidebar,
  middlewareGetRSSSourcesSidebar,
  require("./dashboard")
);

module.exports = router;
