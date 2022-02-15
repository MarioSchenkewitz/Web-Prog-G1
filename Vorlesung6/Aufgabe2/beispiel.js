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

// request handler für die Abfrage von cookies
app.get("/", (req, res) => {
    res.redirect("/login");
    res.send();
});

app.get ("/login", (req, res) => {
    res.send("logged in");
});

app.get ("/logout", (req, res) => {
    res.send("logged out");
});

//starte den server und lausche auf Port 8080
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});