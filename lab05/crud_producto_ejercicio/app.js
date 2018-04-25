var express = require('express'),
app = express(),
bodyParser = require('body-parser'),


producto = require('./models/producto');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('view engine','jade');



app.get('/Producto',producto.show);
app.get('/crearProducto',(req,res)=>{
	res.render('crearProducto');
});
app.post('/crearProducto',producto.create);
app.post('/editarViewProducto',producto.editar);
app.post('/editarProducto',producto.update);
app.post('/eliminarProducto',producto.delete);

app.listen(3000,()=>{
	console.log('Crud Productos ejercicio');
});