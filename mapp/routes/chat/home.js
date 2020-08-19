var express = require("express");
var router = express.Router();
var moment = require("moment");

const folderView = __path_views_chat + "pages/home/";
const layoutChat = __path_views_chat + "chat";
const systemConfig = require(__path_configs + "system");
const notify = require(__path_configs + "notify");

const UserConnect = require(__path_helpers + "users-connect");
const ChatsModel = require(__path_models + "chat");
const ChatRoomsModel = require(__path_models + "chatRooms");
const prefixSocket = "SYSTEM_";

module.exports = function (io) {
  let users = new UserConnect();

  io.on("connection", function (socket) {
    socket.on(`${prefixSocket}CLIENT_SEND_ALL_MESSAGE`, async (data) => {
      if (data.content.length > 0) {
        const result = await ChatsModel.saveItem(data, { task: "add" });

        //io emit send to all
        io.emit(`${prefixSocket}SERVER_RETURN_ALL_MESSAGE`, {
          content: result.content,
          username: result.username,
          avatar: result.avatar,
          created: moment(result.created).format(systemConfig.format_time_chat),
        });
      } else {
        //socket emit only send back the error to the person who sent the data before
        socket.emit(`${prefixSocket}SERVER_RETURN_ERROR`, {
          type: "error",
          content: notify.ERROR_MSG_CHAT_EMPTY,
        });
      }
    });

    socket.on(`${prefixSocket}CLIENT_SEND_FRIEND_REQUEST`, async (data) => {
      const { sender, senderAvatar, socketId } = data;

      io.to(socketId).emit(`${prefixSocket}SERVER_SEND_FRIEND_REQUEST`, {
        sender,
        senderAvatar,
      });
    });

    socket.on(`${prefixSocket}CLIENT_SEND_TYPING`, async (data) => {
      const { username, showTyping } = data;
      //broadcast emit meant send to everyone except the user who is typing
      socket.broadcast.emit(`${prefixSocket}SERVER_SEND_USER_TYPING`, {
        username,
        showTyping,
      });
    });

    socket.on(`${prefixSocket}USER_CONNECT`, async (data) => {
      users.addUser(socket.id, data.username, data.avatar);

      //return list of users currently in current page ~ home
      io.emit(`${prefixSocket}SERVER_SEND_LIST_ALL_USERS`, users.getListUsers());
    });

    socket.on(`disconnect`, async () => {
      let disConnectUser = users.removeUser(socket.id);
      //update current list of user connect back to client, if there is a disconnected user
      if (disConnectUser) io.emit(`${prefixSocket}SERVER_SEND_LIST_ALL_USERS`, users.getListUsers());
    });
  });

  router.get("/", async (req, res, next) => {
    const itemsRoom = await ChatRoomsModel.listItemsForFrontend();
    const itemsChat = await ChatsModel.listItems();

    res.render(`${folderView}index`, {
      layout: layoutChat,
      itemsChat,
      itemsRoom,
      prefixSocket,
    });
  });

  return router;
};
