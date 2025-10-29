import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './mensagem.jsx'

function App() {
  const [contador, setContador] = useState(0)
  const [novoSalario, setNovoSalario] = useState(0)
  const [media, setMedia] = useState(0)
  const [area, setArea] = useState(0)
  const [soma, setSoma] = useState(0)
  const [diferena, setDiferena] = useState(0)
  const [multiplicacao, setMultiplicacao] = useState(0)


  const calcularAumento = (salario, aumento) => {
    return salario + aumento
  }
  const salarioInicial = 2000
  const valorAumento = 500

  const calcularMedia = (nota1, nota2) => {
    return (nota1 + nota2) / 2
  }
  const nota1 = 4
  const nota2 = 8

  const calcularArea = (base, altura) => {
    return base * altura
  }
  const base = 5
  const altura = 10

  const somar = (a, b) => {
    return a + b
  }
  const valorA = 3
  const valorB = 7

  const subtrair = (a, b) => {
    return a - b
  }
  const valor1 = 10
  const valor2 = 4

  const multiplicar = (a, b) => {
    return a * b
  }
  const fator1 = 6
  const fator2 = 9

  return (
    <>  
      <Mensagem nome="Lais" />

      <div>
        <h1>contador: {contador}</h1>
        <button className='aumentar' onClick={() => setContador(contador + 1)}>aumentar</button>
        <button className='diminuir' onClick={() => setContador(contador - 1)}>diminuir</button>
        <button className='zerar' onClick={() => setContador(0)}>zerar</button>
      </div>

      <div >
        <h2>Cálculo de Aumento Salarial</h2>
        <p>salario do funcionario: R$ {salarioInicial}</p>
        <p>valor do aumento: R$ {valorAumento}</p>
        <button onClick={() => setNovoSalario(calcularAumento(salarioInicial, valorAumento))}>
          calcular novo salario
        </button>
        {novoSalario > 0 && <p>Novo Salário: R$ {novoSalario}</p>}
      </div>

      <div >
        <h2>calcular media</h2>
        <p>nota 1: {nota1}</p>
        <p>nota 2: {nota2}</p>
        <button onClick={() => setMedia(calcularMedia(nota1, nota2))}>
          calcular média
        </button>
        <p>media do aluno: {media}</p>
      </div>

      <div>
        <h2>calcular area</h2>
        <p>base: {base}</p>
        <p>altura: {altura}</p>
        <button onClick={() => setArea(calcularArea(base, altura))}>
          calcular area
        </button>
        <p>area: {area}</p>
      </div>

      <div>
        <h2>somar</h2>
        <p>valor a: {valorA}</p>
        <p>valor b: {valorB}</p>
        <button onClick={() => setSoma(somar(valorA, valorB))}>
          somar
        </button>
        <p>soma: {soma}</p>
      </div>

      <div>
        <h2>subtrair</h2>
        <p>valor 1: {valor1}</p>
        <p>valor 2: {valor2}</p>
        <button onClick={() => setDiferena(subtrair(valor1, valor2))}>
          calcular diferença
        </button>
        <p>diferença: {diferena}</p>
      </div>

      <div>
        <h2>multiplicar</h2>
        <p>fator 1: {fator1}</p>
        <p>fator 2: {fator2}</p>
        <button onClick={() => setMultiplicacao(multiplicar(fator1, fator2))}>
          multiplicar
        </button>
        <p>multiplicação: {multiplicacao}</p>
      </div>
    </>
  )
}

export default App