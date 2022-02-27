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


// bitte stelle alle Dateien auf dem Verzeichnis public zur Verfügung
app.use(express.static("public"));

// express js muss wissen, dass es den body-parser verwenden soll
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded());
 app.use(bodyParser.urlencoded({ extended: true }));

app.get("/comment", getComment);
app.post("/comment", addComment);

const user = "";

app.get("/", (req, res) => {
  console.log("currently in /");
  if (req.cookies.username) {
    console.log("user is logged in");
    res.redirect("/home.html");
  } else {
    console.log("not logged in");
    res.redirect("/createUser?username=" + uuidv4());
  }
});

app.get("/index.html", (req, res) => {
  res.redirect("/");
});

app.get("/createUser", (req, res) => {
  if (req.query.username) {
    res.cookie("username", req.query.username).redirect("/home.html");
  }
});


// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Katzopedia app listening on port ${port}`);
});

const comments = [];

function addComment(req, res) {
  if (req.body.comments) {
    cities.push(req.cookies.username + ": " + req.body);
  }
  console.log(comments);
  res.redirect("/");
  res.send();
}

function getComment(_, res) {
  res.json(comments);
}