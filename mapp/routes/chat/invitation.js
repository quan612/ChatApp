var express = require("express");
var router = express.Router();

const folderView = __path_views_chat + "pages/invitation/";
const layoutChat = __path_views_chat + "chat";
const prefixSocket = "SYSTEM_";

module.exports = function (io, users) {
  router.get("/receive", async (req, res, next) => {
    res.render(`${folderView}receive`, {
      layout: layoutChat,
      prefixSocket,
    });
  });

  router.get("/send", async (req, res, next) => {
    res.render(`${folderView}send`, {
      layout: layoutChat,
      prefixSocket,
    });
  });

  router.get("/friend", async (req, res, next) => {
    res.render(`${folderView}friend`, {
      layout: layoutChat,
      prefixSocket,
    });
  });
  return router;
};
