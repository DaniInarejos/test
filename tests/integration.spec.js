const { expect } = require('chai');
const sinon = require('sinon');
const { operaciones } = require('../src/integration')
const sumModule = require('../src/unitary')

describe('Test de Integracion', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('MAL Test de integracion', () => {
    const resultadoExperado = {
      resultadoSuma: 5,
      resultadoResta: 1
    }
    const valor1 = 2
    const valor2 = 3
    const resultado = operaciones(valor1, valor2, true)

    expect(resultadoExperado).to.eql(resultado)
  });

  it('BUEN Test de integracion', () => {
    const resultadoSuma = 199
    const resultadoResta = 5000
    const stubSumar = sinon.stub(sumModule, 'suma').returns(resultadoSuma)
    const stubRestar = sinon.stub(sumModule, 'resta').returns(resultadoResta);

    const resultadoExperado = {
      resultadoSuma,
      resultadoResta
    }
    const valor1 = 2
    const valor2 = 3
    const resultado = operaciones(valor1, valor2, true)

    expect(resultadoExperado).to.eql(resultado)
    expect(stubSumar.firstCall.args).to.deep.equals([valor1, valor2])
    expect(stubRestar.firstCall.args).to.deep.equals([valor2, valor1])

  });
  it('el otro caso de uso del Test de integracion', () => {
    const resultadoSuma = 199
    const resultadoResta = 5000
    const stubSumar = sinon.stub(sumModule, 'suma').returns(resultadoSuma)
    const stubRestar = sinon.stub(sumModule, 'resta').returns(resultadoResta);

    const resultadoExperado = {
      resultadoSuma,
      resultadoResta
    }
    const valor1 = 2
    const valor2 = 3
    const resultado = operaciones(valor1, valor2, false)

    expect(resultadoExperado).to.eql(resultado)
    expect(stubSumar.firstCall.args).to.deep.equals([valor2, valor1])
    expect(stubRestar.firstCall.args).to.deep.equals([valor1, valor2])

  });
})