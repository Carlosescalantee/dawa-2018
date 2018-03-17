
var http = require('http');


fs = require('fs');

http.createServer(function(solicitud,respuesta){
	if (solicitud.url === '/') {
		fs.readFile('./index.html',function(error,html){
		console.log('Conexion entrante');


		respuesta.write(html);
		respuesta.end();
	});


	}else
	if (solicitud.url === '/Nosotros.html') {
		fs.readFile('./Nosotros.html',function(error,html){
		console.log('Conexion entrante');


		respuesta.write(html);
		respuesta.end();
	});


	}else
	if (solicitud.url === '/Nuestrosservicios.html') {
		fs.readFile('./Nuestrosservicios.html',function(error,html){
		console.log('Conexion entrante');


		respuesta.write(html);
		respuesta.end();
	});


	}else
	if (solicitud.url === '/Catalogoclientes.html') {
		fs.readFile('./Catalogoclientes.html',function(error,html){
		console.log('Conexion entrante');


		respuesta.write(html);
		respuesta.end();
	});


	}else
	if (solicitud.url === '/Contacto.html') {
		fs.readFile('./Contacto.html',function(error,html){
		console.log('Conexion entrante');


		respuesta.write(html);
		respuesta.end();


	});


	}

}).listen(8080);
console.log('Pagina Web');