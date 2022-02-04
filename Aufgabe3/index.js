// wir benötigen http funktionen
const express = require("express");
// wird benötigt um formular daten lesen zu können
const bodyParser = require("body-parser");
// wir machen unsere applikation bekannt
const app = express();
const port = 8080;

// bitte stelle alle Dateien auf dem Verzeichnis public
// zur Verfügung
app.use(express.static("./public"));
// express js muss wissen, dass es den body-parser verwenden soll
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));


// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});