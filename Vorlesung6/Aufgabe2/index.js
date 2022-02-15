//wir brauchen expressjs
const express = require("express");

// wir brauchen einen cookie parser
const cookieParser = require("cookie-parser");

// erstelle eine Anwendung
const app = express();

// port
const port = 8080;

// benutze cookie parser
app.use(cookieParser());

// veröffentliche den Inhalt des des Ordners "public"
app.use(express.static("public"));

// request handler für die Abfrage von cookies
app.get("/", (req, res) => {
    if (req.cookies.username) {
        console.log("user is logged in");
        res.redirect("/home.html");
        res.send();
    } else {
        console.log("not logged in");
        res.redirect("/login?username=test");
        res.send();
    }
});

app.get ("/login", (req, res) => {
    if (req.query.username) {
        res.cookie("username", req.query.username).send("logged in");
    } 
    res.redirect("/");
    res.send();
});

app.get ("/logout", (req, res) => {
    res.send("logged out");
});

//starte den server und lausche auf Port 8080
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});