const http = require('http');

http.createServer((req, res) => {
    // res.write('Hola mundo');

    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Charles',
        edad:27,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Port 8080');