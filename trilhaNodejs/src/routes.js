const routes = require("express").Router();

routes.get("/", (req, res) => {
  return res.json({
    msg: "Hello World!",
  });
});

module.exports = routes;
