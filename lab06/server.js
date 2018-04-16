

var express = require('express'),
app = express(),
http = require('http').Server(app),
user = require('./models/user');
io = require('socket.io')(http)

port = process.env.PORT || 3000;

io.on('connection', function(socket){
	console.log('Usuario conectado!');	
	socket.on('disconnect', function (){
		console.log('Usuario desconectado!');
	});

	user.show(function(data){
			io.emit('listar', data);
		});

	socket.on('crear', function(data){
		console.log(data)
		user.create(data,function(rpta){
			console.log(rpta)
			io.emit('nuevo',rpta);
		});
	});	
});
app.set('view engine', 'jade');

app.use('/static', express.static('public'));

app.get('/', function(req, res){

	res.render('main');

});

http.listen(port, function(){
	console.log('Servidor conectado en *:' + port);
});