const { expect } = require("chai");
const { suma } = require('../src/unitary')

describe('Test unitarios', () => {
  it('test simple', () => {
    const resultExpected = 2 + 3 + 5;
    expect(resultExpected).to.equal(10);
  });

  xit('Testeando la funcion suma', () => {
    const valor1 = 5;
    const valor2 = 6;
    const resultadoExperado = 11;
    const resultado = suma(valor1, valor2)

    expect(resultadoExperado).to.eql(resultado)
  })

  xit('Testeando la funcion suma con resultados falsos', () => {
    const valor1 = 5;
    const valor2 = 6;
    const resultadoFalso1 = 10;
    const resultadoFalso2 = 12;
    const resultado = suma(valor1, valor2)

    expect(resultadoFalso1).not.to.eql(resultado)
    expect(resultadoFalso2).not.to.eql(resultado)
  })
  xit('Testeando la funcion suma con un string', () => {
    const valor1 = "5";
    const valor2 = 6;
    const resultadoExperado = 11;
    const resultado = suma(valor1, valor2)

    expect(resultadoExperado).to.eql(resultado)
  })
  xit('Testeando la funcion suma con un NaN', () => {
    const valor1 = NaN;
    const valor2 = 6;
    const resultadoExperado = 11;
    const resultado = suma(valor1, valor2)

    expect(resultadoExperado).to.eql(resultado)
  })



});
