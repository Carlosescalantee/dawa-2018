
var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hola!!!');
});

app.listen(3000, function () {
  console.log('Landing Page en el puerto 3000');
}); 