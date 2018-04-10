'use strict';

module.exports = (function() {

  var Calculadora = {

    sumar: function() {
      var suma = 0, i = undefined;
      for( i=0; i < arguments.length; i++ )
        suma += arguments[i];

      return suma;
    },

    resta: function(numero1, numero2) {
      return numero1 - numero2;
    },

    multiplicacion: function() {
      var multiplicar = arguments[0], i = undefined;
      for( i=1; i < arguments.length; i++ )
        multiplicar *= arguments[i];

      return multiplicacao;
    },

    dividir: function(numero1, numero2) {
      return numero1 / numero2;
    }

  };

  return Calculadora;

})();