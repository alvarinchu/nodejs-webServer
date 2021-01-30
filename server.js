const express = require('express');
const hbs = require('hbs');
const app = express();
const helpers = require('./hbs/helpers');

app.use(express.static('./public'));

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

// helpers

app.get('/', function (req, res) {
    res.render('home');
    //res.send(`Hello World ${req.url}`);
});

app.get('/about', function (req, res) {
    res.render('about');
    //res.send(`Hello World ${req.url}`);
});

app.listen(port, () => {
    console.log('Escuchando en puerto ' + port);
});
