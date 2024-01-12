var router = require("express").Router();

module.exports = function (app) {
  app.use("/api/v1", router);
  return router;
};
