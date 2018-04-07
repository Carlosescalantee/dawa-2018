
(function() {

var Sumar=function(){
		var datos = [];
		return{
		agregar : function(number){
			datos.push(number);
		},
		obtenerSumaActual : function(){
			var res = 0;
			var str = "";
			if (datos.length < 2) {
				return console.log("Ingresa dos numeros");
			}
			for(var i =0; i<datos.length;i++){
				res += datos[i];
				if(i==(datos.length-1)){
					str +=datos[i]+"=";
				}else{
					str += datos[i]+"+";	
				}
			}
			return str+res;
		}
	}
};

var s1 = Sumar ();
var s2 = Sumar ();

s1.agregar(1997);
s1.agregar(1998);

s2.agregar(1999);
s2.agregar(2000);

//

console.log(s1.obtenerSumaActual());

//

console.log(s2.obtenerSumaActual());

}());