const express = require('express')
const app = express()
 
app.get('/data/:id/:name', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello World ${req.url}`)
})

app.post('/data', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.send({ nombre: 'Álvaro', apellidos: 'Pérez'})
});
 
app.listen(3000, () => {
    console.log('Escuchando en puerto 3000');
})