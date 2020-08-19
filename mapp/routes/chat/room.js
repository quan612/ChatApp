var express = require("express");
var router = express.Router();
var moment = require("moment");
var UsersRoom = require(__path_helpers + "users-room");

const ParamsHelpers = require(__path_helpers + "params");
const folderView = __path_views_chat + "pages/room/";
const layoutChat = __path_views_chat + "chat";

const ChatRoomsModel = require(__path_models + "chatRooms");
const ChatsInRoomModel = require(__path_models + "chatInRooms");

const systemConfig = require(__path_configs + "system");
const notify = require(__path_configs + "notify");

module.exports = function (io, socket) {
  let prefixSocket = "ROOM_";
  let usersRoom = new UsersRoom();

  io.on("connection", function (socket) {
    //when user joins this room
    socket.on(`${prefixSocket}CLIENT_SEND_JOIN_ROOM`, (data) => {
      socket.join(data.room);
      usersRoom.addUser(socket.id, data.username, data.avatar, data.room);

      //return list of users currently in current page ~ home
      io.to(data.room).emit(`${prefixSocket}SEND_LIST_USER`, usersRoom.getListUsers(data.room));
    });

    socket.on("disconnect", () => {
      let user = usersRoom.removeUser(socket.id);
      if (user) {
        socket.to(user.room).emit(`${prefixSocket}SEND_LIST_USER`, usersRoom.getListUsers(user.room));
      }
    });

    socket.on(`${prefixSocket}CLIENT_SEND_ALL_MESSAGE`, async (data) => {
      if (data.content.length > 0) {
        const result = await ChatsInRoomModel.saveItem(data, { task: "add" });

        //io emit send to all
        io.to(data.room).emit(`${prefixSocket}SERVER_RETURN_ALL_MESSAGE`, {
          room: result.room,
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

    socket.on(`${prefixSocket}CLIENT_SEND_TYPING`, async (data) => {
      const { username, showTyping, room } = data;
      socket.to(room).emit(`${prefixSocket}SERVER_SEND_USER_TYPING`, {
        username,
        showTyping,
      });
    });
  });

  router.get("/:room", async (req, res, next) => {
    let roomID = ParamsHelpers.getParam(req.params, "room", "");
    const roomItem = await ChatRoomsModel.getItemForFrontend(roomID);
    const chatsRoom = await ChatsInRoomModel.listItems({ room: roomID }, { task: "list-items-by-room" });

    res.render(`${folderView}index`, {
      layout: layoutChat,
      roomID,
      roomItem,
      chatsRoom,
      prefixSocket,
    });
  });

  return router;
};
