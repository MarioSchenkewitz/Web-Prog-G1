//wir brauchen expressjs
const express = require("express");

// erstelle eine Anwendung
const app = express();

// veröffentliche den Inhalt des des Ordners "public"
app.use(express.static("public"));

//erstelle einen Endpunkt /data
app.get("/data", (_, res) => {
    res.json([1, 2, 3, 4, 5, 6, 7, 8, 9])
});

//starte den server und lausche auf Port 8080
app.listen(8080);