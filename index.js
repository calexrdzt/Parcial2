

//Christian Alexander Rodriguez Timarán - A00010104

var express = require('express');
var app = express();
const fs= require('fs');
var motorRender= require('express-handlebars');
app.use(express.static('public'));
app.engine('handlebars',motorRender());
app.set('view engine','handlebars');


//Ruta de inicio
app.get('/inicio', function(req, res) {

    res.render('main', contexto[0]);

 });

 //Ruta de Sobre mi
app.get('/sobre', function(req, res) {

    res.render('main', contexto[1]);

 });

 //Ruta de Contacto
app.get('/contacto', function(req, res) {

    res.render('main', contexto[2]);

 });



var contexto = [
    {
        titulo: 'Inicio',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis eu eros nec pulvinar. Suspendisse faucibus mauris eget turpis aliquet faucibus a congue ante. Donec tincidunt placerat justo, et iaculis urna tempus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        layaout: false,
    },

    {
        titulo: 'Sobre mi',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis eu eros nec pulvinar. Suspendisse faucibus mauris eget turpis aliquet faucibus a congue ante. Donec tincidunt placerat justo, et iaculis urna tempus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        layaout: false,
    },

    {
        titulo: 'Contacto',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis eu eros nec pulvinar. Suspendisse faucibus mauris eget turpis aliquet faucibus a congue ante. Donec tincidunt placerat justo, et iaculis urna tempus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        layaout: false,
    }
]



//Servidor creado
app.listen(3000, function() {
    console.log('Entro perro');
});