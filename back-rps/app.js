var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();

//Configuración de archivos
app.use(express.static(__dirname + '/public'));//en la carpeta public guardo los archivos estáticos*/

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(port, () =>{
    console.log('Servidor corriendo correctamente');
  });
  
app.get('/', function(req, res, next) {
  // Handle the get for this route
  res.send('Hello World!');
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});


module.exports = app;//exportación del archivo app.js