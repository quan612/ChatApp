$(function () {
  let socket = io.connect("http://localhost:5678");

  let elmInputMessage = $("input#message");
  let elmInputUsr = $('input[name="username"]');
  let elmInputAvatar = $('input[name="avatar"]');
  let elmInputRoom = $('input[name="privateId"]');
  let elmInputSocketId = $('input[name="socketId"]');

  let prefixSocket = $('input[name="prefixSocket"]').val();
  let elmFormChat = $("form#form-chat");
  let elmListMessage = $("div#area-list-message");
  let tmplMessageChat = $("#template-chat-message");
  let tmplNotifyError = $("#template-notify-error");
  let tmplUserTyping = $("#template-user-typing");

  let elmTotalUnReadMessage = $("span.total-message-notify");
  let tmplNotify = $("#template-message-notify");

  let timeoutObj;
  let emojioneAreas = elmInputMessage.emojioneArea({
    search: false,
  });

  let onlineUsers = null;

  socket.on("connect", () => {
    socket.emit(`${prefixSocket}USER_CONNECT`, paramsUserConnectServer(elmInputUsr, elmInputAvatar));
  });

  socket.on(`${prefixSocket}SERVER_SEND_CURRENT_ONLINE_USERS`, (users) => {
    onlineUsers = { ...users };
    
  });

  socket.on(`${prefixSocket}SERVER_RETURN_PRIVATE_MESSAGE`, (data) => {
    
    showListMessage(data, elmInputUsr, tmplMessageChat, elmListMessage);
  });

  socket.on(`${prefixSocket}RETURN_ERROR`, (data) => {
    showError(data, tmplNotifyError, elmFormChat);
  });

  socket.on(`${prefixSocket}SERVER_SEND_USER_TYPING`, (data) => {
    showTyping(data, tmplUserTyping, elmFormChat);
  });

  elmFormChat.submit(function () {
    let receiver = null;
    
    if (onlineUsers)
      receiver = Object.values(onlineUsers).filter((user) => user.username === elmInputRoom.val());
   
    socket.emit(
      `${prefixSocket}CLIENT_SEND_PRIVATE_MESSAGE`,
      paramsUserSendPrivateMessage(elmInputMessage, elmInputUsr, elmInputAvatar, elmInputRoom, receiver)
    );

    $.ajax({
      method: "POST",
      url: "/api/save-unread-message",
      dataType: "json",
      data: {
        sender: elmInputUsr.val(),
        senderAvatar: elmInputAvatar.val(),
        content: elmInputMessage.val(),
        receiver: elmInputRoom.val(),
        created: Date.now(),
      },
    }).done((data) => {});

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

  // elmInputMessage.data("emojioneArea").on("keyup paste emojibtn.click", function () {
  //   if (this.getText().length > 0) {
  //     clearTimeout(timeoutObj);
  //     timeoutObj = setTimeout(cancelTyping, 2000);
  //     socket.emit(
  //       `${prefixSocket}CLIENT_SEND_TYPING`,
  //       paramsUserTypingFromRoom(elmInputUsr, true, elmInputRoom)
  //     );
  //   }
  // });

  // server sends message to destination client
  socket.on(`${prefixSocket}SERVER_SEND_PRIVATE_MESSAGE_NOTIFY`, (data) => {
    console.log("receiver online notify");
    const { sender, senderAvatar, content, room, created } = data;
    let parent = $(`ul.message-notify li`);
    let privateChatLink = `/private` + `/${sender}`;

    let currentNotify = parseInt(elmTotalUnReadMessage.html());
    if (parent.find(`a[data-name="${sender}"]`).length < 1 && window.location.pathname !== privateChatLink) {
      if (isNaN(currentNotify)) currentNotify = 0;
      elmTotalUnReadMessage.html(currentNotify + 1);
    }

    let template = tmplNotify.html();
    Mustache.parse(template);
    let render = Mustache.render(template, {
      username: sender,
      userAvatar: senderAvatar,
      created,
      content,
      privateChatLink,
    });

    if (currentNotify === 0) {
      $(`<li><ul class="menu"><li>` + render + "</li></ul></li>").insertAfter($(`li#list-message-notify`));
    } else {
      parent.find(`a[data-name="${sender}"]`).remove();
      $(`ul.message-notify li`).append($(render));
    }
  });
});
