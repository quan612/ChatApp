var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passport = require("passport");

const validator = require("express-validator");
const session = require("express-session");
let flash = require("connect-flash");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
let moment = require("moment");
let socketIO = require("socket.io");

const pathConfig = require("./path");

// Define Path
global.__base = __dirname + "/";
global.__path_app = __base + pathConfig.folder_app + "/";
global.__path_configs = __path_app + pathConfig.folder_configs + "/";
global.__path_helpers = __path_app + pathConfig.folder_helpers + "/";

//route
global.__path_routers = __path_app + pathConfig.folder_routers + "/";
global.__path_router_admin = __path_routers + pathConfig.folder_module_admin + "/";
global.__path_router_blog = __path_routers + pathConfig.folder_module_blog + "/";
global.__path_router_mrss = __path_routers + pathConfig.folder_module_mrss + "/";
global.__path_router_chat = __path_routers + pathConfig.folder_module_chat + "/";

global.__path_schemas = __path_app + pathConfig.folder_schemas + "/";
global.__path_models = __path_app + pathConfig.folder_models + "/";
global.__path_validates = __path_app + pathConfig.folder_validates + "/";
global.__path_middleware = __path_app + pathConfig.folder_middleware + "/";

//view
global.__path_views = __path_app + pathConfig.folder_views + "/";
global.__path_views_admin = __path_views + pathConfig.folder_module_admin + "/";
global.__path_views_blog = __path_views + pathConfig.folder_module_blog + "/";
global.__path_views_mrss = __path_views + pathConfig.folder_module_mrss + "/";
global.__path_views_chat = __path_views + pathConfig.folder_module_chat + "/";

global.__path_public = __base + pathConfig.folder_public + "/";
global.__path_uploads = __path_public + pathConfig.folder_uploads + "/";

const systemConfig = require(__path_configs + "system");
const databaseConfig = require(__path_configs + "database");

mongoose.connect(
  `mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0-cytwr.gcp.mongodb.net/test?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

var app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "abcnhds",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 15 * 60 * 1000,
    },
  })
);

let io = socketIO();
app.io = io;

//passport
require(__path_configs + "passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = req.flash();
  next();
});

app.use(
  validator({
    customValidators: {
      isNotEqual: (value1, value2) => {
        return value1 !== value2;
      },
    },
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", __path_views_admin + "backend");

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Local variable
app.locals.systemConfig = systemConfig;
app.locals.moment = moment;

// Setup router
app.use(`/${systemConfig.prefixAdmin}`, require(__path_router_admin + "index"));
app.use(`/${systemConfig.prefixMRSS}`, require(__path_router_mrss + "index"));
app.use(`/${systemConfig.prefixChat}`, require(__path_router_chat + "index")(io));
app.use(`/${systemConfig.prefixBlog}`, require(__path_router_blog + "index"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(async (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (err.message && err.message != "Not Found") console.log("error at ", err.message);
  // render the error page
  if (systemConfig.env == "dev") {
    res.status(err.status || 500);
    res.render(__path_views_admin + "pages/error", {
      pageTitle: "Page Not Found ",
    });
  }

  // render the error page
  if (systemConfig.env == "production") {
    res.status(err.status || 500);
    res.render(__path_views_blog + "pages/error", {
      top_post: false,
      layout: __path_views_blog + "frontend",
    });
  }
});

module.exports = app;
