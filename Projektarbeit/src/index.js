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
  if (!req.cookies.username) {
    console.log("not logged in");
    res.cookie("username", uuidv4(), {
      maxAge: 900000,
      httpOnly: true
    })
  }
  next()
}

app.use(userCheck);

app.use("/", userCheck, express.static("./public"))

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Katzopedia app listening on port ${port}`);
});

app.get("/funfacts/comment", userCheck, getComment);
app.post("/funfacts/comment", userCheck, addComment);

app.get("/catwatch/comment", userCheck, getComment);
app.post("/catwatch/comment", userCheck, addComment);

app.get("/katzenspielzeug/comment", userCheck, getComment);
app.post("/katzenspielzeug/comment", userCheck, addComment);

const comments = {
  funfactscomment: [],
  catwatchcomment: [],
  katzenspielzeugcomment: []
};
const commentsToDisplay={
  funfactscomment: [],
  catwatchcomment: [],
  katzenspielzeugcomment: []
};
const users = {};


function addComment(req, res) {
  var currentUrl = req.url.toString().replace(/\//g, "")
  if (req.body.name) {
    //falls der name geändert wird
    if (users[req.cookies.username] != req.body.name) {
      users[req.cookies.username] = req.body.name;
    }
  } else {
    users[req.cookies.username] = "Anonymous";
  }
  if (req.body.kommentar) {
    comments[currentUrl].push(req.cookies.username + ": " + req.body.kommentar);
    console.log(comments)

    commentsToDisplay[currentUrl].push(users[req.cookies.username] + ": " + req.body.kommentar )
    console.log(commentsToDisplay)
  }

  res.redirect('back');
  res.send();
}

function getComment(req, res) {
  var currentUrl = req.url.toString().replace(/\//g, "")
  res.json(commentsToDisplay[currentUrl]);
}