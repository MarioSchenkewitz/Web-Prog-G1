//process.env["DEBUG"] = "express:*";

const express = require("express");
//hilft Texteingaben von z.B. Formularen zu lesen
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static("./public"));

function cookieSecurity(req, res, next){
    if(req.cookies.loggedIn){
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

//app.use(cookeSecurity); //alles was danach folgt benötigt die cookie security
app.use("/secure", cookieSecurity, express.static("./secure"))

const users = ["mario"]
const pass = {
    mario: "1234"
}

app.post("/login", (req, res) => {
  //console.log(JSON.stringify(req.body));
  //console.log("Benutzername: " + req.body.user)
  //console.log("Passwort: " + req.body.pass)
  if (users.indexOf(req.body.user) > -1) {
    if (req.body.pass == pass[req.body.user]){
        res.cookie("loggedIn", 1, {
            maxAge: 1000 * 60 * 5,
            expires: new Date(Date.now() + 1000 * 60 * 5)})
            .redirect("/secure/");
    }
  } else{
    res.status(401).send("Unauthorized");
  }
});

//Lösung aus Vorlesung
/*
app.post("/login", (req, res) => {
  // existieren user und pass?
  if (req.body.user && req.body.pass) {
    // sind die Eingabe länger als 0 Zeichen lang?
    if (req.body.user.length > 0 && req.body.pass.length > 0) {
      res.cookie(
        "testSession",
        { user: req.body.user, loggedIn: true },
        { maxAge: 1000 * 60 * 4 }
      );
      res.redirect("/secure");
      res.send();
      return;
    }
  }
*/

app.get("/logout", (_, res) => {
    res.clearCookie("testSession");
    res.redirect("/");
    res.send();
  });

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
