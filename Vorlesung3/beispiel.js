const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCOde = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hallo Welt');
});

server.listen(port, hostname, () => {
    console.log(`server läuft unter http://${hostname}:${port}/`);
})