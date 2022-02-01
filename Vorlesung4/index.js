// wir benötigen http funktionen
const express = require("express");
// wird benötigt um formular daten lesen zu können
const bodyParser = require("body-parser");
// wir machen unsere applikation bekannt
const app = express();
const port = 8080;

// bitte stelle alle Dateien auf dem Verzeichnis public
// zur Verfügung
app.use(express.static("./vorlesung4/public"));
// express js muss wissen, dass es den body-parser verwenden soll
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));


//variable, die eine Stadt speichern kann.
let city = "";

//post request handler
//wird ausgeführt, wenn submit gedrückt wird
app.post("/data", (req, res) => {
  console.log(req.body);
  city = req.body.city;
  res.send(city);
});

// get request handler
// wird ausgeführt, wenn die url .../data angefragt (get) wird
app.get("/data", (req,res) => {
    res.send(city);
})

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
