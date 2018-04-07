function quick_Sort(numerosingresados) {
    if (numerosingresados.length <= 1) { 
        return numerosingresados;
    } else {

        var izquierda = [];
        var derecha = [];
        var nuevo_array = [];
        var ordenar = numerosingresados.pop();
        var length = numerosingresados.length;

        for (var i = 0; i < length; i++) {
            if (numerosingresados[i] <= ordenar) {
                izquierda.push(numerosingresados[i]);
            } else {
                derecha.push(numerosingresados[i]);
            }
        }
        return nuevo_array.concat(quick_Sort(izquierda), ordenar, quick_Sort(derecha));
    }
}
var mis_numeros = [1995, 1997, 1990, 2000, 1999, 1996 ];
console.log("Numeros ingresados: " + mis_numeros);
var orden = quick_Sort(mis_numeros);
console.log("Numeros ordenados: " + orden);