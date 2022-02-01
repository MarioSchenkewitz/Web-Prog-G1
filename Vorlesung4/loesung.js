// wir benötigen http funktionen
const express = require("express");
var bodyParser = require("body-parser");
// wir machen unsere applikation bekannt
const app = express();
const port = 8080;

// bitte stelle alles Dateien auf dem Verzeichnis public
// zur Verfügung
app.use(express.static("./vorlesung4/public"));
// TODO: doku
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/data", getCities);
app.post("/data", addCity);

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const cities = [];

function addCity(req, res) {
  if (req.body.city) {
    cities.push(req.body);
  }
  console.log(cities);
  res.redirect("/");
  res.send();
}

function getCities(_, res) {
  res.json(cities);
}
