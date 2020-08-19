var express = require("express");
const fetch = require("node-fetch");
var xml2js = require("xml2js").parseString;
let Parser = require("rss-parser");
let parser = new Parser({
  timeout: 30000,
});
let router = express.Router();

const systemConfig = require(__path_configs + "system");

const ParamsHelpers = require(__path_helpers + "params");
const linkIndex = "/" + systemConfig.prefixMRSS;

const folderView = __path_views_mrss + "pages/dashboard/";
const layoutMRSS = __path_views_mrss + "mrss";

const RSSCategoryModel = require(__path_models + "rssCategory");
const RSSSourcesModel = require(__path_models + "rssSources");

router.get("/", async function (req, res, next) {
  let params = {};
  let selectedCategories = [];
  let rssSources = [];
  let selectedSources = [];

  // params.keyword = ParamsHelpers.getParam(req.query, "keyword", "");
  if (req.body.keyword) params.keyword = req.body.keyword;
  else params.keyword = "";

  if (req.body.rssSourcesRequest) {
    selectedSources = [
      ...selectedSources,
      ...(Array.isArray(req.body.rssSourcesRequest)
        ? req.body.rssSourcesRequest
        : [req.body.rssSourcesRequest]),
    ];
  }

  // lấy những source từ database
  let sources = await RSSSourcesModel.listItemsFrontend(selectedSources, {
    task: "items-active-only",
  });

  /* nếu mà selected sources trước đó được chọn từ checkbox, 
  thì mình tìm những category cho source này
  cái này dùng để xử lí cho việc ngta chọn checkbox con, 
  mà ko chọn checkbox cha, thì checkbox cha cũng sẽ được chọn ở lần render kế tiếp sau khi bấm filter */

  if (selectedSources.length !== 0)
    for (let i = 0; i < sources.length; i++) {
      if (selectedCategories.some((categoryId) => categoryId == sources[i].category.id)) continue;
      selectedCategories = [...selectedCategories, sources[i].category.id];
    }

  // get all category here
  let rssCategories = await RSSCategoryModel.listItemsFrontend(null, {
    task: "items-in-menu",
  });

  // for each source we get its link and append to rssSources array
  for (let i = 0; i < sources.length; i++) {
    let data = [];
    data = await parser
      .parseURL(sources[i].rssLink)
      .catch((error) => console.log("error at parse URL ", error))
      .finally();
    sources[i]._doc.rssData = data;
    rssSources = [...rssSources, sources[i]._doc];
  }

  res.render(`${folderView}index`, {
    layout: layoutMRSS,
    rssCategories,
    rssSources,
    params,
    selectedCategories,
    selectedSources,
  });
});

// fetch more rss item
router.post("/fetch-more/:rssCategoryId/", async (req, res, next) => {
  let params = {};
  params.keyword = ParamsHelpers.getParam(req.query, "keyword", "");
  let rssCategoryId = ParamsHelpers.getParam(req.params, "rssCategoryId", "");

  const sources = await RSSSourcesModel.listItemsFrontend(
    { id: rssCategoryId },
    {
      task: "items-in-category",
    }
  );

  let rssSources = [];

  for (let i = 0; i < sources.length; i++) {
    const data = await parser.parseURL(sources[i].rssLink);
    sources[i]._doc.rssData = data;
    rssSources = [...rssSources, sources[i]._doc];
  }

  res.json({ rssSources, params });
});

// handle filter checkbox,
router.post("/", async (req, res, next) => {
  console.log("filter is clicked", req.body.keyword);
  let params = {};
  let rssSources = [];
  let selectedCategories = [];
  let selectedSources = [];

  if (req.body.keyword) params.keyword = req.body.keyword;
  else params.keyword = "";

  selectedSources = [
    ...selectedSources,
    ...(Array.isArray(req.body.rssSourcesRequest)
      ? req.body.rssSourcesRequest
      : [req.body.rssSourcesRequest]),
  ];

  let sources = await RSSSourcesModel.listItemsFrontend(selectedSources, {
    task: "items-filter-ids",
  });

  for (let i = 0; i < sources.length; i++) {
    if (selectedCategories.some((categoryId) => categoryId == sources[i].category.id)) continue;
    selectedCategories = [...selectedCategories, sources[i].category.id];
  }

  //get only categories that belong to selected checkbox
  const rssCategories = await RSSCategoryModel.listItemsFrontend(selectedCategories, {
    task: "items-filter-ids",
  });

  //for each source we get its link and append to rssSources array
  for (let i = 0; i < sources.length; i++) {
    let data = [];
    data = await parser
      .parseURL(sources[i].rssLink)
      .catch((error) => console.log("error at parse URL ", error))
      .finally();
    sources[i]._doc.rssData = data;
    rssSources = [...rssSources, sources[i]._doc];
  }

  res.render(`${folderView}index`, {
    layout: layoutMRSS,
    rssCategories,
    rssSources,
    params,
  });
});

router.post("/getCoin", async (req, res, next) => {
  let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
  let apiKey = "dde632d9-8d9d-4138-9d71-0d8cc8deab42";
  let qString = "?CMC_PRO_API_KEY=" + apiKey + "&sort=market_cap&start=1&limit=4&convert=USD";

  const resp = await fetch(url + qString, { mode: "no-cors" });
  coins = await resp.json();
  res.json(coins.data);
});

router.post("/getSJC", async (req, res, next) => {
  let url = "http://www.sjc.com.vn/xml/tygiavang.xml";
  let sjc;

  const resp = await fetch(url, { mode: "no-cors" });
  let text = await resp.text();

  xml2js(text, function (err, result) {
    let cityHCM = result.root.ratelist[0].city.filter((item) => item["$"].name == "Hồ Chí Minh");
    let size = 4;
    sjc = cityHCM[0].item.slice(0, size);
  });

  res.json(sjc);
});

module.exports = router;
