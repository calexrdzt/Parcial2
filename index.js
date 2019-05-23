

//Christian Alexander Rodriguez Timarán - A00010104

var express = require('express');
var app = express();
const fs= require('fs');
var motorRender= require('express-handlebars');
app.use(express.static('public'));
app.engine('handlebars',motorRender());
app.set('view engine','handlebars');






var contexto = [
    {
        titulo: 'Inicio',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis eu eros nec pulvinar. Suspendisse faucibus mauris eget turpis aliquet faucibus a congue ante. Donec tincidunt placerat justo, et iaculis urna tempus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        layout: false,
    },

    {
        titulo: 'Sobre mi',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis eu eros nec pulvinar. Suspendisse faucibus mauris eget turpis aliquet faucibus a congue ante. Donec tincidunt placerat justo, et iaculis urna tempus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        layout: false,
    },

    {
        titulo: 'Contacto',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis eu eros nec pulvinar. Suspendisse faucibus mauris eget turpis aliquet faucibus a congue ante. Donec tincidunt placerat justo, et iaculis urna tempus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        layout: false,
    }
]
//Ruta de inicio
app.get('/inicio', function(req, res) {

  //  fs.writeFile('baseDatos.txt','pagina: Inicio Fecha: '+ new Date(), 'utf8',baseDatos);
    fs.appendFileSync("baseDatos.txt", 'pagina: Inicio Fecha: '+ new Date() + '\n', "utf8",{'flags': 'a+'})
    res.render('plantilla', contexto[0]);

 });

 //Ruta de Sobre mi
app.get('/sobre', function(req, res) {

    fs.appendFileSync("baseDatos.txt", 'pagina: Sobre Fecha: '+ new Date() + '\n', "utf8",{'flags': 'a+'})
    res.render('plantilla', contexto[1]);

 });

 //Ruta de Contacto
app.get('/contacto', function(req, res) {

    fs.appendFileSync("baseDatos.txt", 'pagina: Contacto Fecha: '+ new Date() + '\n', "utf8",{'flags': 'a+'})
    res.render('plantilla', contexto[2]);

 });


 function baseDatos (){
    console.log("La base de datos se crea");
 }




//Servidor creado
app.listen(3000, function() {
    console.log('Entro perro');
});