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
app.get("/cookies", (req, res) => {
    console.log("Username: " + req.cookies.username)
    res.send();
});

app.get ("/login", (req, res) => {
    if (req.query.username) {
        res.cookie("username", req.query.username).send();
    } else {
        res.send();
    }
});

app.get ("/data", (req, res) => {
    if (req.cookies.username == "mario") {
        data = [1,2,3];
        console.log("Username: " + req.cookies.username + " " + data)
        res.send();
    } else {
        console.log("Username: " + req.cookies.username + " no data available")
        res.send();
    }
});

const data2 = {
    mario: [1, 2, 3],
    fabian: [7],
    tobi: [9, 8, 7]
};

app.get("/loesung", (req, res) => {
    if (req.cookies["username"]) {
        const values = data2[req.cookies["username"]];
        if (values) {
            res.json(values);
            return
        }
    }
});

//starte den server und lausche auf Port 8080
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});