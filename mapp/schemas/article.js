const mongoose = require("mongoose");
const databaseConfig = require(__path_configs + "database");

var schema = new mongoose.Schema({
  name: String,
  status: String,
  special: String,
  ordering: Number,
  content: String,
  thumb: String,
  category: {
    id: String,
    name: String
  },
  created: {
    user_id: Number,
    user_name: String,
    time: Date
  },
  modified: {
    user_id: Number,
    user_name: String,
    time: Date
  },
  tags: [{ id: String, name: String }]
});

module.exports = mongoose.model(databaseConfig.col_article, schema);
