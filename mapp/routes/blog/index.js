var express = require("express");
var router = express.Router();

const middleGetCategoryForMenu = require(__path_middleware + "get-category-for-menu");
const middleArticleRandom = require(__path_middleware + "get-article-random");
const middleGetAllTags = require(__path_middleware + "get-tags");

router.use("/", middleGetCategoryForMenu, middleArticleRandom, middleGetAllTags, require("./home"));
router.use("/category", require("./category"));
router.use("/about", require("./about"));
router.use("/contact", require("./contact"));
router.use("/article", require("./article"));
router.use("/tag", require("./tag"));

module.exports = router;
