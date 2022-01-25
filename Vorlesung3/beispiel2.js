//benötigen http funktionen
var http = require('http');

//benötigen filesystem funktionen
var fs = require("fs");

//requesthandler definieren
function handleRequest(_,res){
    //html lesen
    const html = fs.readFileSync("./vorlesung3/beispiel2.html", "utf8");
    //inhalt als antwort schicken
    res.write(html);
    res.end();
}

http.createServer(handleRequest).listen(8080);