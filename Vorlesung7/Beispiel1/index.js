const secure = require("./core/security");
const setUsername = require("./core/cookies").set;
const unsetUsername = require("./core/cookies").unset;
const getUsername = require("./core/cookies").username;

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;

app.use(cookieParser());

function redirectRoot(res) {
  res.redirect("/");
  res.send();
}

app.get("/login", (req, res) => {
  setUsername(req, res);
  redirectRoot(res);
});

app.get("/logout", (_, res) => {
  unsetUsername(res);
  redirectRoot(res);
});

app.use(secure, express.static("public"));

const data = {
  jonas: [1, 2, 3],
  fabian: [7]
};

app.get("/data", secure, (req, res) => {
  let values = data[getUsername(req)] || [];
  res.json(values);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
