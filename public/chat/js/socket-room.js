$(function () {
  let socket = io.connect("http://localhost:5678");
  //let socket = currentSocket();
  let elmInputMessage = $("input#message");
  let elmInputUsr = $('input[name="username"]');
  let elmInputAvatar = $('input[name="avatar"]');
  let elmInputRoom = $('input[name="roomID"]');

  let prefixSocket = $('input[name="prefixSocket"]').val();
  let elmFormChat = $("form#form-chat");
  let elmListMessage = $("div#area-list-message");
  let tmplMessageChat = $("#template-chat-message");
  let tmplNotifyError = $("#template-notify-error");
  let tmplUserTyping = $("#template-user-typing");

  let elmTotalUserOnline = $("span#total-users-room");
  let elmListUsers = $("div#list-users");
  let elmTotalMember = $("span#total-members-room");
  let tmplUserOnline = $("#template-user-online");

  let timeoutObj;
  let emojioneAreas = elmInputMessage.emojioneArea({
    search: false,
  });

  socket.on("connect", () => {
    socket.emit(
      `${prefixSocket}CLIENT_SEND_JOIN_ROOM`,
      paramsUserConnectRoom(elmInputUsr, elmInputAvatar, elmInputRoom)
    );
  });

  socket.on(`${prefixSocket}SEND_LIST_USER`, (users) => {
    showListUserOnline(users, elmInputUsr, tmplUserOnline, elmListUsers, elmTotalUserOnline);
    elmTotalMember.html(users.length);
  });

  socket.on(`${prefixSocket}SERVER_RETURN_ALL_MESSAGE`, (data) => {
    showListMessage(data, elmInputUsr, tmplMessageChat, elmListMessage);
  });

  socket.on(`${prefixSocket}RETURN_ERROR`, (data) => {
    showError(data, tmplNotifyError, elmFormChat);
  });

  socket.on(`${prefixSocket}SERVER_SEND_USER_TYPING`, (data) => {
    showTyping(data, tmplUserTyping, elmFormChat);
  });

  elmFormChat.submit(function () {
    socket.emit(
      `${prefixSocket}CLIENT_SEND_ALL_MESSAGE`,
      paramsUserSendAllMessageFromRoom(elmInputMessage, elmInputUsr, elmInputAvatar, elmInputRoom)
    );
    elmInputMessage.val("");
    emojioneAreas.data("emojioneArea").setText("");
    $("div#area-notification").remove();
    return false;
  });

  const cancelTyping = () => {
    socket.emit(
      `${prefixSocket}CLIENT_SEND_TYPING`,
      paramsUserTypingFromRoom(elmInputUsr, false, elmInputRoom)
    );
  };

  elmInputMessage.data("emojioneArea").on("keyup paste emojibtn.click", function () {
    if (this.getText().length > 0) {
      clearTimeout(timeoutObj);
      timeoutObj = setTimeout(cancelTyping, 2000);
      socket.emit(
        `${prefixSocket}CLIENT_SEND_TYPING`,
        paramsUserTypingFromRoom(elmInputUsr, true, elmInputRoom)
      );
    }
  });
});
