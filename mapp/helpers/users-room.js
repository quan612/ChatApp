module.exports = class UsersRoom {
  constructor() {
    this.users = [];
  }

  addUser(id, username, avatar, room) {
    // to handle situation that having the same user login twice, when duplicate browser tab
    let user = this.getUserByUsername(username, room);
    if (!user) {
      let user = { id, username, avatar, room };
      this.users.push(user);
    }
    return this.users;
  }

  removeUser(id) {
    let user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }

  getUserByUsername(username, room) {
    return this.users.filter((user) => user.username === username && user.room === room)[0];
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getListUsers(room) {
    let users = this.users.filter((user) => user.room === room);
    // let listUserName = users.map((user) => {
    //   return user;
    // });
    return users;
  }
};
