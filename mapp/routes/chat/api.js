var express = require("express");
var router = express.Router();

const UsersModel = require(__path_models + "users");

router.post("/add-friend", async (req, res, next) => {
  let item = {};
  item.sender = req.body.sender;
  item.senderAvatar = req.body.senderAvatar;
  item.receiver = req.body.receiver;
  item.receiverAvatar = req.body.receiverAvatar;
  let check = await UsersModel.checkCondition(item, { task: "check-add-friend" });

  if (check === null) {
    item.status = "success";

    await UsersModel.saveItem(item, { task: "sender-friend-request" });
    await UsersModel.saveItem(item, { task: "receiver-friend-request" });
  } else {
    item.status = "fail";
  }

  res.json(item);
});

router.post("/add-friend-deny", async (req, res, next) => {
  let item = {};
  item.sender = req.body.sender;
  item.receiver = req.user.username;

  await UsersModel.saveItem(item, { task: "add-friend-deny-receiver" });
  await UsersModel.saveItem(item, { task: "add-friend-deny-sender" });
  res.json(item);
});

router.post("/add-friend-accept", async (req, res, next) => {
  let item = {};
  item.sender = req.body.sender;
  item.senderAvatar = req.body.senderAvatar;
  item.receiver = req.user.username;
  item.receiverAvatar = req.user.avatar;

  await UsersModel.saveItem(item, { task: "add-friend-accept-receiver" });
  await UsersModel.saveItem(item, { task: "add-friend-accept-sender" });
  res.json(item);
});

router.post("/save-unread-message", async (req, res, next) => {
  let item = {};
  item.sender = req.body.sender;
  item.senderAvatar = req.body.senderAvatar;
  item.content = req.body.content;
  item.receiver = req.body.receiver;
  item.created = req.body.created;

  await UsersModel.saveItem(item, { task: "unread-message" });

  res.json(item);
});

module.exports = router;
