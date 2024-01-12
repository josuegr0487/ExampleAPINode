module.exports = (app) => {
  const personController = require("../controllers/person.controller");
  const Router = app.config.routing;

  Router.route("/person")
    .post(personController.create)
    .get(personController.read);

  Router.route("/person/:id")
    .put(personController.update)
    .delete(personController.delete)
    .get(personController.readById);
};
