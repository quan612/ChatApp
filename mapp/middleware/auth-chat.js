const StringHelpers = require(__path_helpers + "string");
const systemConfig = require(__path_configs + "system");

const linkLogin = StringHelpers.formatLink("/" + systemConfig.prefixChat + "/auth/login/");

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }

  //fixed too many redirect issue
  else if (req.path !== "/auth/login/") {
    res.redirect(linkLogin);
  } else next();
};
