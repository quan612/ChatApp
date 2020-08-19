$(function () {
  let elmInputUsr = $('input[name="username"]');
  let elmInputAvatar = $('input[name="avatar"]');
  let elmInputRelationship = $("input[name='relationship']");
  let elmListUsers = $("div#list-users");
  let elmTotalUsers = $("span#total-users");

  let socket = io.connect("http://localhost:5678");
  //let socket = currentSocket();

  socket.on("connect", () => {
    socket.emit(`USER_CONNECT`, paramsUserConnectServer(elmInputUsr, elmInputAvatar));
  });

  socket.on(`SERVER_SEND_LIST_ALL_USERS`, (users) => {
    showListUserOnline(users, elmInputUsr, elmInputRelationship, elmListUsers, elmTotalUsers);
  });
});
