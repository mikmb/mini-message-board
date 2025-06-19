const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", { title: "Add a New Message" });
});

module.exports = newMessageRouter;
