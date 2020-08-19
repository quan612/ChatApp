var express = require("express");
var router = express.Router();

const ParamsHelpers = require(__path_helpers + "params");
const ArticleModel = require(__path_models + "article");
const TagsModel = require(__path_models + "tags");

const folderView = __path_views_blog + "pages/tag/";
const layoutBlog = __path_views_blog + "frontend";

/* GET Tag page. */
router.get("/:id", async (req, res, next) => {
  let idTag = ParamsHelpers.getParam(req.params, "id", "");
  let itemsInTag = [];
  let tagName = "";

  // Articles In Tag
  await ArticleModel.listItemsFrontend({ id: idTag }, { task: "items-in-tag" }).then(items => {
    itemsInTag = items;
  });

  //find the tag based on id as the itemsInTag may contain multiple tags
  await TagsModel.getItem(idTag).then(tag => {
    tagName = tag.name;
  });

  res.render(`${folderView}index`, {
    layout: layoutBlog,
    top_post: false,
    itemsInTag,
    tagName
  });
});

module.exports = router;
