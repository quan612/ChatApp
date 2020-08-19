const RSSSourcesModel = require(__path_models + "rssSources");

module.exports = async (req, res, next) => {
  const rssSources = await RSSSourcesModel.listItemsFrontend(null, {
    task: "items-active-only", // similar to item on menu, we get all active categories
  });

  res.locals.rssSourcesSidebar = rssSources;

  next();
};
