var express = require('express'),
app = express(),
bodyParser = require('body-parser'),

usuario = require('./models/usuario');
categoria = require('./models/categoria');
producto = require('./models/producto');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('view engine','jade');



//USUARIOS CRUD

app.get('/Usuario',usuario.show);
app.get('/crearUsuario',(req,res)=>{
	res.render('crearUsuario');
});
app.post('/crearUsuario',usuario.create);
app.post('/editarViewUsuario',usuario.editar);
app.post('/editarUsuario',usuario.update);
app.post('/eliminarUsuario',usuario.delete);



//CATEGORIA CRUD
app.get('/Categoria',categoria.show);
app.get('/crearCategoria',(req,res)=>{
	res.render('crearCategoria');
});
app.post('/crearCategoria',categoria.create);
app.post('/editarViewCategoria',categoria.editar);
app.post('/editarCategoria',categoria.update);
app.post('/eliminarCategoria',categoria.delete);



//PRODUCTO CRUD
app.get('/Producto',producto.show);
app.get('/crearProducto',(req,res)=>{
	res.render('crearProducto');
});
app.post('/crearProducto',producto.create);
app.post('/editarViewProducto',producto.editar);
app.post('/editarProducto',producto.update);
app.post('/eliminarProducto',producto.delete);

app.listen(3000,()=>{
	console.log('Crudzaso');
});