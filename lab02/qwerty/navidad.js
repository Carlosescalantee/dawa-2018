function navidad(){
	var navidad = new Date('12/25/2018').getTime();
	var hoy = new Date().getTime();
	var diferencia = navidad - hoy;
	diferencia = ((((diferencia/1000)/60)/60)/24)+1;

	return ("Dias restantes "+Math.round(diferencia));
}