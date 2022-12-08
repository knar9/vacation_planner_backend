const controller = require("../controllers/vacationdates.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post("/api/vacationdates/requests", controller.requests);
    app.post("/api/vacationdates/userRequests/:username", controller.userRequests);
};