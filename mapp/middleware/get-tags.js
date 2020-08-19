const TagsModel = require(__path_models + "tags");
const ArticleModel = require(__path_models + "article");

module.exports = async (req, res, next) => {
  let items = await TagsModel.listItemsFrontend(null);
  let countArticle = await ArticleModel.countOnTag(items);

  let itemsWithTag = items.map(item => {
    return { ...item._doc, count: countArticle[item.name] };
  });

  res.locals.tags = itemsWithTag;
  next();
};
