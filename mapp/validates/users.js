const util = require("util");
const notify = require(__path_configs + "notify");

const options = {
  name: { min: 5, max: 30 },
  password: { min: 5, max: 30 },
  ordering: { min: 0, max: 100 },
  status: { value: "novalue" },
  group: { value: "allvalue" },
  content: { min: 5, max: 200 },
};

module.exports = {
  validator: (req, errUpload, taskCurrent) => {
    // NAME
    req
      .checkBody("name", util.format(notify.ERROR_NAME, options.name.min, options.name.max))
      .isLength({ min: options.name.min, max: options.name.max });

    //password length
    // req
    //   .checkBody("password", util.format(notify.ERROR_PASSWORD, options.password.min, options.password.max))
    //   .isLength({ min: options.password.min, max: options.password.max });
    req.checkBody("password", "Password cannot be empty").notEmpty();
    //   .custom(() => {
    //     if (req.body.password === req.body.confirmPassword) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   });
    // .withMessage("Passwords don't match.");

    // // password confirm
    req.assert("confirmPassword", "Passwords do not match").isNotEqual(req.body.password);

    // ORDERING
    req
      .checkBody("ordering", util.format(notify.ERROR_ORDERING, options.ordering.min, options.ordering.max))
      .isInt({ gt: options.ordering.min, lt: options.ordering.max });

    // STATUS
    req.checkBody("status", notify.ERROR_STATUS).isNotEqual(options.status.value);

    // GROUP
    req.checkBody("group_id", notify.ERROR_GROUP).isNotEqual(options.group.value);

    // CONTENT
    req
      .checkBody("content", util.format(notify.ERROR_NAME, options.content.min, options.content.max))
      .isLength({ min: options.content.min, max: options.content.max });

    let errors = req.validationErrors() !== false ? req.validationErrors() : [];

    if (errUpload) {
      if (errUpload.code == "LIMIT_FILE_SIZE") {
        errUpload = notify.ERROR_FILE_LIMIT;
      }
      errors.push({ param: "avatar", msg: errUpload });
    } else {
      if (req.file == undefined && taskCurrent == "add") {
        errors.push({ param: "avatar", msg: notify.ERROR_FILE_REQUIRE });
      }
    }

    return errors;
  },
};
