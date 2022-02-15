const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;

app.use(cookieParser());

app.get("/login", (req, res) => {
  if (req.query.username) {
    res.cookie("username", req.query.username);
  }

  res.redirect("/");
  res.send();
});

function secure(req, res) {
  if (!req.cookies.username) {
    res.status(401).send("Unauthorized");
    return;
  }
}

app.use(secure, express.static("public"));

const data = {
  jonas: [1, 2, 3],
  fabian: [7]
};

app.get("/data", secure, (req, res) => {
  const values = data[req.cookies["username"]];
  if (values) {
    res.json(values);
    return;
  }

  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});