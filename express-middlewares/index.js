const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

//views
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("src"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
