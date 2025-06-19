const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages })
);
indexRouter.post("/new", (req, res) => {
  const msgUser = req.body.msgUser;
  const msgText = req.body.msgText;
  messages.push({ text: msgText, user: msgUser, added: new Date() });

  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  console.log(req.params);
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { title: "Message Detail", message: message });
});

module.exports = indexRouter;
