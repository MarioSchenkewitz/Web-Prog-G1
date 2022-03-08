// wir benötigen http funktionen
const express = require("express");
// wird benötigt um formular daten lesen zu können
const bodyParser = require("body-parser");
//cookies
const cookieParser = require("cookie-parser");
//unique identifier for users
const {
  v4: uuidv4
} = require("uuid");

// wir machen unsere applikation bekannt
const app = express();
const port = 8080;

app.use(cookieParser());

// express js muss wissen, dass es den body-parser verwenden soll
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));

function userCheck(req, res, next) {
  if (req.cookies.username) {
    console.log("user is logged in");
  } else {
    console.log("not logged in");
    res.cookie("username", uuidv4(), { maxAge: 900000, httpOnly: true })
  }
  next()
}

app.use(userCheck);

app.use("/", userCheck, express.static("./public"))


app.get("/test",userCheck, (req, res) => {

});

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Katzopedia app listening on port ${port}`);
});

app.get("/funfacts/comment", getComment);
app.post("/funfacts/comment", addComment);

const comments = [];

function addComment(req, res) {
  if (req.body.comments) {
    comments.push(req.cookies.username + ": " + req.body);
  }
  console.log(comments);
  res.redirect("/");
  res.send();
}

function getComment(_, res) {
  res.json(comments);
}