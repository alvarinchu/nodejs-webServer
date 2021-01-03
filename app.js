const http = require('http');

http.createServer((req, res) => {
    //console.log(req.read());
    res.writeHead(200, { 'Content-type': 'application/json' });

    let salida = {
        nombre: 'Alvaro',
        apellido: 'Pérez',
        url: req.url
    }

    res.write(JSON.stringify(salida)); 
    res.end();
}).listen(8080);

console.log('Servidor Arrancado');




