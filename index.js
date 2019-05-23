

//Christian Alexander Rodriguez Timarán - A00010104

var express = require('express');
var app = express();
const fs= require('fs');
var motorRender= require('express-handlebars');
app.use(express.static('public'));
app.engine('handlebars',motorRender());
app.set('view engine','handlebars');


app.get('/', function(req, res) {
    res.send('<h1>Hola Mundo!</h1>');
    
 });

//Servidor creado
app.listen(3000, function() {
    console.log('Entro perro');
});