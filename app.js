const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
