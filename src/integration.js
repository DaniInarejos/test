const _ = require('./unitary')

/*
  Esto es una funcion que agrupa una o varias funciones 
  podemos pensar en esta funcion como en un controlador o en un servicio.
*/
function operaciones(valor1, valor2, condicion) {
  if (condicion) {
    return {
      resultadoSuma: _.suma(valor1, valor2),
      resultadoResta: _.resta(valor2, valor1)
    }

  }
  return {
    resultadoSuma: _.suma(valor2, valor1),
    resultadoResta: _.resta(valor1, valor2)
  }
}
module.exports = {
  operaciones
}