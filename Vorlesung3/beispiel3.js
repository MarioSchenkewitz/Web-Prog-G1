//http funktionen aber diesmal von epress js
const express = require("express");
//Pfad zur .js Datei
const path = require('path');

// anwendung bei express bekannt machen
const app = express();
const port = 3000;

//definieren einen request header für
// GET requests und dem Pfad "/"
app.get("/", (req, res) => {
    //res.send("Hello World!");
    res.sendFile(path.join(__dirname, '/beispiel2.html'));
});

//alternativ statt app.get block
// app.use(express.static("./public"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});