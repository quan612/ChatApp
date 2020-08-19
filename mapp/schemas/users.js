const mongoose = require("mongoose");
const databaseConfig = require(__path_configs + "database");

var schema = new mongoose.Schema({
  name: String,
  status: String,
  ordering: Number,
  content: String,
  avatar: String,
  password: String,
  username: String,
  group: {
    id: String,
    name: String,
  },
  created: {
    user_id: Number,
    user_name: String,
    time: Date,
  },
  modified: {
    user_id: Number,
    user_name: String,
    time: Date,
  },
  requestTo: [{ username: String, avatar: String }],
  requestFrom: [{ username: String, avatar: String }],
  friendList: [{ username: String, avatar: String }],
  totalRequest: Number,
  unreadMessage: [{ username: String, avatar: String, content: String, created: Date }],
});

module.exports = mongoose.model(databaseConfig.col_users, schema);
