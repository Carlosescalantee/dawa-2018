var mongoose = require('mongoose'),
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/proyecto');

var producto_schema = new Schema({
	_id:Number,
	nombre:String,
	descripcion:String,
	precio:String,

	
});
producto_model = mongoose.model('producto',producto_schema,'producto');
module.exports = {
	show: (req,res)=>{
		producto_model.find({},(err,items)=>{
			if (!err) {
				res.render('Producto',{data: items});
			}else{
				return console.log(err);
			}
		});
	},
	create:(req,res)=>{
		var item = {
			nombre:req.body.nombre,
			descripcion:req.body.descripcion,
			precio:req.body.precio,
			
		};
		producto_model.find({},(err,items)=>{
			if (!err) {
				item._id = items.length;
				var nuevo = new producto_model(item).save();
				res.redirect('/producto');
			}else{
				return console.log(err);
			}
		});
	},
	editar:(req,res)=>{
		producto_model.findOne({_id:req.body._id},(err,producto)=>{
			res.render('editarProducto',{data: producto});
		});
	},
	update:(req,res)=>{
		producto_model.findOne({_id: req.body._id},(err,producto)=>{
			producto._id = req.body._id;
			producto.nombre = req.body.nombre;
			producto.descripcion = req.body.descripcion;
			producto.precio = req.body.precio;
			

			producto.save();
			res.redirect('/producto');
		});
	},
	delete:(req,res)=>{
		producto_model.findOne({_id: req.body._id},(err,producto)=>{
			producto.remove();
			res.redirect('/producto');
		});
	},
}