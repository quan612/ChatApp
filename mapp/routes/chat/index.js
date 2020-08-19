var express = require("express");
var router = express.Router();

const UserConnect = require(__path_helpers + "users-connect");
let users = new UserConnect();

const middleGetUserInfo = require(__path_middleware + "get-user-info");
const middleAuthenticationChat = require(__path_middleware + "auth-chat");

module.exports = function (io) {
  // io.on("connection", function (socket) {
  //   socket.on(`USER_CONNECT`, async (data) => {
  //     users.addUser(socket.id, data.username, data.avatar);

  //     //return list of users currently in current page ~ home
  //     io.emit(`SERVER_SEND_LIST_ALL_USERS`, users.getListUsers());
  //   });

  //   socket.on(`disconnect`, async () => {
  //     let disConnectUser = users.removeUser(socket.id);
  //     //update current list of user connect back to client, if there is a disconnected user
  //     if (disConnectUser) io.emit(`SERVER_SEND_LIST_ALL_USERS`, users.getListUsers());
  //   });
  // });

  router.use("/auth", require("./auth"));
  router.use("/", middleAuthenticationChat, middleGetUserInfo, require("./home")(io));
  router.use("/private", require("./private")(io));
  router.use("/room", require("./room")(io));
  router.use("/api", require("./api"));
  router.use("/invitation", require("./invitation")(io));

  return router;
};
