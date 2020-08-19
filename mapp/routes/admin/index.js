var express = require("express");
var router = express.Router();

const middleAuthenticationBackEnd = require(__path_middleware + "auth-backend");

router.use("/", middleAuthenticationBackEnd, require("./home"));
router.use("/dashboard", require("./dashboard"));
router.use("/items", require("./items"));
router.use("/groups", require("./groups"));
router.use("/users", require("./users"));
router.use("/category", require("./category"));
router.use("/article", require("./article"));
router.use("/tags", require("./tags"));
router.use("/chatRooms", require("./chatRooms"));
//rss
router.use("/rssCategory", require("./rssCategory"));
router.use("/rssSources", require("./rssSources"));

module.exports = router;
