const RSSCategoryModel = require(__path_models + "rssCategory");

module.exports = async (req, res, next) => {
  const rssCategories = await RSSCategoryModel.listItemsFrontend(null, {
    task: "items-in-menu", // similar to item on menu, we get all active categories
  });

  res.locals.rssCategorySidebar = rssCategories;

  next();
};
