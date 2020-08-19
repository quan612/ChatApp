let socket = io.connect("http://localhost:5678");
function currentSocket() {
  return socket;
}

function paramsUserConnectServer(elmInputUsr, elmInputAvatar) {
  return {
    username: elmInputUsr.val(),
    avatar: elmInputAvatar.val(),
  };
}

function paramsUserSendAllMessage(elmInputMsg, elmInputUsr, elmInputAvatar) {
  return {
    content: elmInputMsg.val(),
    username: elmInputUsr.val(),
    avatar: elmInputAvatar.val(),
  };
}

// function paramsUserSendRequestAddFriend($elmInputUsername, $elmInputAvatar, toUsername, toAvatar) {
//   return {
//     fromUsername: $elmInputUsername.val(),
//     fromAvatar: $elmInputAvatar.val(),
//     toUsername: toUsername,
//     toAvatar: toAvatar,
//   };
// }

// function paramsClientSendAddFriend($elmInputUsername, $elmInputAvatar, toSocketID) {
//   return {
//     fromUsername: $elmInputUsername.val(),
//     fromAvatar: $elmInputAvatar.val(),
//     toSocketID: toSocketID,
//   };
// }

function showNotify(content) {
  $.notify(
    {
      message: content,
    },
    {
      type: "success",
      allow_dismiss: true,
      placement: {
        from: "bottom",
        align: "right",
      },
    }
  );
}

function paramsUserConnectRoom(elmInputUsr, elmInputAvatar, elmInputRoom) {
  return {
    username: elmInputUsr.val(),
    avatar: elmInputAvatar.val(),
    room: elmInputRoom.val(),
  };
}

function paramsUserSendAllMessageFromRoom(elmInputMessage, elmInputUsr, elmInputAvatar, elmInputRoom) {
  return {
    content: elmInputMessage.val(),
    username: elmInputUsr.val(),
    avatar: elmInputAvatar.val(),
    room: elmInputRoom.val(),
  };
}

function paramsUserSendPrivateMessage(
  elmInputMessage,
  elmInputUsr,
  elmInputAvatar,
  elmInputRoom,
  receiver,
  sender
) {
  return {
    content: elmInputMessage.val(),
    username: elmInputUsr.val(),
    avatar: elmInputAvatar.val(),
    room: elmInputRoom.val(),
    receiver,
    sender,
  };
}

function paramsUserTyping(elmInputUsr, showTyping) {
  return {
    username: elmInputUsr.val(),
    showTyping: showTyping,
  };
}

function paramsUserTypingFromRoom(elmInputUsr, showTyping, elmInputRoom) {
  return {
    username: elmInputUsr.val(),
    showTyping: showTyping,
    room: elmInputRoom.val(),
  };
}

function showListMessage(data, elmInputUsr, tmplChat, elmChatMessage) {
  const { username, avatar, created, content } = data;
  //this block updates client side to show chat messages on real time
  let userAvatar = "uploads/users/" + avatar;
  let typeOfChat = elmInputUsr.val() === username ? "right" : "";
  let classUserName = elmInputUsr.val() === username ? "pull-left" : "pull-right";
  let classCreated = elmInputUsr.val() === username ? "pull-right" : "pull-left";

  let template = tmplChat.html();
  Mustache.parse(template);
  let render = Mustache.render(template, {
    typeOfChat,
    classUserName,
    classCreated,
    username,
    created,
    content,
    userAvatar,
  });

  elmChatMessage.append(render);
}

function showError(data, tmplNotifyError, elmFormChat) {
  let template = tmplNotifyError.html();
  Mustache.parse(template);
  let render = Mustache.render(template, { data });
  $(render).insertBefore(elmFormChat);
}

function showTyping(data, tmplUserTyping, elmFormChat) {
  const { username, showTyping } = data;

  if (showTyping) {
    let template = tmplUserTyping.html();
    Mustache.parse(template);
    let render = Mustache.render(template, { username });
    $(render).insertBefore(elmFormChat);
  } else {
    $("p.show-typing").remove();
  }
}

function showListUserOnline(users, elmInputUsr, elmInputRelationship, elmListUsers, elmTotalUsers) {
  let relationshipInfo = JSON.parse(elmInputRelationship.val());
  let xhtml = "";

  for (let i = 0; i < users.length; i++) {
    const { username, avatar, id } = users[i];

    if (username === elmInputUsr.val()) continue;

    let type = getRelationship(relationshipInfo, username);
    let template = "#template-user-online";
    let tmplUserOnline = $(template);

    if (type !== null) {
      template += "-" + type;
      tmplUserOnline = $(template);
    }
    let currentTemplate = tmplUserOnline.html();
    Mustache.parse(currentTemplate);
    xhtml += Mustache.render(currentTemplate, { username, avatar, id });
  }
  elmListUsers.html(xhtml);
  elmTotalUsers.html(users.length - 1);
}

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
