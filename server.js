const { static } = require('express');
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/data/:id/:name?', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello World ${req.url}`);
});

app.post('/data', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.send({ nombre: 'Álvaro', apellidos: 'Pérez Rodrigo' });
});

app.listen(3000, () => {
    console.log('Escuchando en puerto 3000');
});
