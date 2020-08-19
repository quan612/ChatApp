var express = require("express");
var router = express.Router();
var moment = require("moment");

const UserConnect = require(__path_helpers + "users-connect");
const UsersModel = require(__path_models + "users");
const ChatPrivateModel = require(__path_models + "chatPrivate");

const ParamsHelpers = require(__path_helpers + "params");
const folderView = __path_views_chat + "pages/private/";
const layoutChat = __path_views_chat + "chat";

const systemConfig = require(__path_configs + "system");
const notify = require(__path_configs + "notify");

module.exports = function (io) {
  let prefixSocket = "PRIVATE_";
  let users = new UserConnect();

  io.on("connection", function (socket) {
    // let srvSockets = io.sockets.sockets;
    // console.log(Object.values(srvSockets).length);

    socket.on(`${prefixSocket}USER_CONNECT`, async (data) => {
      users.addUser(socket.id, data.username, data.avatar);

      //return list of users currently in current page ~ home
      io.emit(`${prefixSocket}SERVER_SEND_CURRENT_ONLINE_USERS`, users.getListUsers());
    });

    socket.on(`disconnect`, async () => {
      let disConnectUser = users.removeUser(socket.id);
      //update current list of user connect back to client, if there is a disconnected user
      if (disConnectUser) io.emit(`${prefixSocket}SERVER_SEND_LIST_ALL_USERS`, users.getListUsers());
    });

    socket.on(`${prefixSocket}CLIENT_SEND_PRIVATE_MESSAGE`, async (data) => {
      if (data.content.length > 0) {
        const result = await ChatPrivateModel.saveItem(data, { task: "add" });

        //io emit send to the user itself
        io.to(socket.id).emit(`${prefixSocket}SERVER_RETURN_PRIVATE_MESSAGE`, {
          room: result.room,
          content: result.content,
          username: result.username,
          avatar: result.avatar,
          created: moment(result.created).format(systemConfig.format_time_chat),
        });

        //io emit send to socketId, if the receiver is currently online
        if (data.receiver && data.receiver.length > 0) {
          // io.to(data.receiver[0].id).emit(`${prefixSocket}SERVER_RETURN_PRIVATE_MESSAGE`, {
          //   room: result.room,
          //   content: result.content,
          //   username: result.username,
          //   avatar: result.avatar,
          //   created: moment(result.created).format(systemConfig.format_time_chat),
          // });

          socket.broadcast.to(data.receiver[0].id).emit(`${prefixSocket}SERVER_RETURN_PRIVATE_MESSAGE`, {
            room: result.room,
            content: result.content,
            username: result.username,
            avatar: result.avatar,
            created: moment(result.created).format(systemConfig.format_time_chat),
          });

          //show notify
          io.to(data.receiver[0].id).emit(`${prefixSocket}SERVER_SEND_PRIVATE_MESSAGE_NOTIFY`, {
            sender: result.username,
            senderAvatar: result.avatar,
            content: result.content,
            room: result.room,
            created: moment(result.created).format(systemConfig.format_time_chat),
          });
        }
      } else {
        //socket emit only send back the error to the person who sent the data before
        socket.emit(`${prefixSocket}SERVER_RETURN_ERROR`, {
          type: "error",
          content: notify.ERROR_MSG_CHAT_EMPTY,
        });
      }
    });

    socket.on(`${prefixSocket}CLIENT_SEND_TYPING`, async (data) => {
      const { username, showTyping, room } = data;
      socket.to(room).emit(`${prefixSocket}SERVER_SEND_USER_TYPING`, {
        username,
        showTyping,
      });
    });
  });

  router.get("/", async (req, res, next) => {
    let privateId = null;
    let usersInSystem = await UsersModel.listItemsChat({});
    let allUsers = usersInSystem.filter((user) => user.username !== req.user.username);

    res.render(`${folderView}index`, {
      layout: layoutChat,
      privateId,
      allUsers,
      prefixSocket,
    });
  });

  router.get("/:private", async (req, res, next) => {
    let privateId = ParamsHelpers.getParam(req.params, "private", "");
    let usersInSystem = await UsersModel.listItemsChat({});
    let allUsers = usersInSystem.filter((user) => user.username !== req.user.username);

    const chatsRoom = await ChatPrivateModel.listItems(
      { room: privateId, currentUser: req.user.name },
      { task: "list-items-by-privacy" }
    );

    res.render(`${folderView}index`, {
      layout: layoutChat,
      privateId,
      allUsers,
      chatsRoom,
      prefixSocket,
    });
  });

  return router;
};
