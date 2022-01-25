// wir benötigen http funktionen
const express = require("express");
// wir machen unsere applikation bekannt
const app = express();
const port = 8080;

// bitte stelle alles Dateien auf dem Verzeichnis public
// zur Verfügung
app.use(express.static(__dirname + '/public'));

// und starte den server und lausche auf Port 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});