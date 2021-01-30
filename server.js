const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('./public'));

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Alvaro',
        anio: new Date().getFullYear(),
    });
    //res.send(`Hello World ${req.url}`);
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
