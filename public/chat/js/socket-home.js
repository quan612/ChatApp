function getRelationship(objRelationship, value) {
  let keys = Object.keys(objRelationship);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    for (let j = 0; j < objRelationship[key].length; j++) {
      let item = objRelationship[key][j];
      if (item.username === value) {
        return key;
      }
    }
  }
  return null;
}

$(function () {
  var pathname = window.location.pathname;
  var $elmNav = $("#navbar-collapse .navbar-nav a");
  $elmNav.each(function () {
    var link = $(this).attr("href");
    if (pathname === link) {
      $(this).parent("li").addClass("active");
    }
  });
});

$(function () {
  let timeOut;
  let prefixSocket = $('input[name="prefixSocket"]').val();
  let elmFormChat = $("form#form-chat");

  let elmInputRelationship = $("input[name='relationship']");
  let elmInputMsg = $("input#message");
  let elmInputUsr = $('input[name="username"]');
  let elmInputAvatar = $('input[name="avatar"]');
  let elmChatMessage = $("div#area-list-message");

  let tmplChat = $("#template-chat-message");
  let tmplNotifyError = $("#template-notify-error");
  let tmplUserTyping = $("#template-user-typing");

  let elmTotalUsers = $("span#total-users");
  let elmListUsers = $("div#list-users");

  let elmTotalInviteRequest = $("span.total-invite-requests");
  let tmplInviteRequest = $("#template-invite-requests");

  let socket = io.connect("http://localhost:5678");
  //let socket = currentSocket();
  let emojiArea = elmInputMsg.emojioneArea();

  socket.on("connect", () => {
    socket.emit(`${prefixSocket}USER_CONNECT`, paramsUserConnectServer(elmInputUsr, elmInputAvatar));
  });

  const cancelTyping = () => {
    socket.emit(`${prefixSocket}CLIENT_SEND_TYPING`, paramsUserTyping(elmInputUsr, false));
  };

  elmInputMsg.data("emojioneArea").on("keyup paste emojibtn.click", function () {
    if (this.getText().length > 0) {
      clearTimeout(timeOut);
      timeOut = setTimeout(cancelTyping, 2000);
      socket.emit(`${prefixSocket}CLIENT_SEND_TYPING`, paramsUserTyping(elmInputUsr, true));
    }
  });

  socket.on(`${prefixSocket}SERVER_RETURN_ALL_MESSAGE`, (data) => {
    showListMessage(data, elmInputUsr, tmplChat, elmChatMessage);
  });

  socket.on(`${prefixSocket}SERVER_RETURN_ERROR`, (data) => {
    showError(data, tmplNotifyError, elmFormChat);
  });

  socket.on(`${prefixSocket}SERVER_SEND_USER_TYPING`, (data) => {
    showTyping(data, tmplUserTyping, elmFormChat);
  });

  socket.on(`${prefixSocket}SERVER_SEND_LIST_ALL_USERS`, (users) => {
    showListUserOnline(users, elmInputUsr, elmInputRelationship, elmListUsers, elmTotalUsers);
  });

  elmFormChat.submit(function () {
    socket.emit(
      `${prefixSocket}CLIENT_SEND_ALL_MESSAGE`,
      paramsUserSendAllMessage(elmInputMsg, elmInputUsr, elmInputAvatar)
    );

    $("div#area-notification").remove();
    elmInputMsg.val("");
    elmInputMsg.text("");
    emojiArea.data("emojioneArea").setText("");
    return false;
  });

  // client sends request to server, so server will forward request to destination
  $(document).on("click", "button.add-friend", function () {
    let receiver = $(this).data("username");
    let receiverAvatar = $(this).data("avatar");
    let sender = elmInputUsr.val();
    let senderAvatar = elmInputAvatar.val();
    let socketId = $(this).data("socketid");
    let addFriendButton = $(this);
    let addFriendButtonParent = $(this).parent();

    $.ajax({
      method: "POST",
      url: "/api/add-friend",
      dataType: "json",
      data: {
        sender,
        senderAvatar,
        receiver,
        receiverAvatar,
      },
    }).done((data) => {
      const { sender, senderAvatar, status } = data;

      if (status === "fail") showNotify("Friend request sent, wait for accept");
      else {
        addFriendButton.remove();
        addFriendButtonParent.append(
          `<button type='button' class='btn btn-block btn-info btn-w btn-sm'>Request Sent</button>`
        );

        socket.emit(`${prefixSocket}CLIENT_SEND_FRIEND_REQUEST`, {
          sender,
          senderAvatar,
          socketId,
        });
      }
    });
  });

  // server sends request to destination client
  socket.on(`${prefixSocket}SERVER_SEND_FRIEND_REQUEST`, (data) => {
    const { sender, senderAvatar } = data;
    let currentInvite = parseInt(elmTotalInviteRequest.html());
    elmTotalInviteRequest.html(currentInvite + 1);

    let template = tmplInviteRequest.html();
    Mustache.parse(template);
    let render = Mustache.render(template, { sender, senderAvatar });

    if (currentInvite === 0) {
      $(
        `<li><ul class="menu"><li>` +
          render +
          '</li></ul></li><li class="footer"><a href="#">View all</a></li>'
      ).insertAfter($(`li#list-user-invite`));
    } else {
      $(render).insertAfter($(`div.user-invite`).last());
    }

    showNotify(`${sender} sent a friend request`);
  });

  // client deny friend request
  $(document).on("click", "button.control-add-friend-deny", function (event) {
    let sender = $(this).data("sender");
    $.ajax({
      method: "POST",
      url: "/api/add-friend-deny",
      dataType: "json",
      data: {
        sender,
      },
    }).done((data) => {
      let currentInvite = parseInt(elmTotalInviteRequest.html());
      elmTotalInviteRequest.html(currentInvite - 1);

      //remove the div that is showing friend request
      $(`div.user-invite[data-name="${data.sender}"]`).fadeOut();
    });
    return false;
  });

  // client accept friend request
  $(document).on("click", "button.control-add-friend-accept", function (event) {
    let sender = $(this).data("sender");
    let senderAvatar = $(this).data("senderavatar");
    $.ajax({
      method: "POST",
      url: "/api/add-friend-accept",
      dataType: "json",
      data: {
        sender,
        senderAvatar,
      },
    }).done((data) => {
      let currentInvite = parseInt(elmTotalInviteRequest.html());
      elmTotalInviteRequest.html(currentInvite - 1);

      //remove the div that is showing friend request
      $(`div.user-invite[data-name="${data.sender}"]`).fadeOut();
    });
    return false;
  });
});
