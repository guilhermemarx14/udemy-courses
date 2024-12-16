
import './App.css'
import logoImg from './assets/logo.png'
import { useState, FormEvent} from 'react'

interface InfoProps {
  title: string
  alcool: string | number
  gasolina: string | number
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [alcoolInput, setAlcoolInput] = useState(1)
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent) {
    event.preventDefault()
    const calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7) {
      setInfo({
        title: 'Compensa usar álcool',
        alcool: formatarMoeda(alcoolInput),
        gasolina: formatarMoeda(gasolinaInput)
      })
    } else {
      setInfo({
        title: 'Compensa usar gasolina',
        alcool: formatarMoeda(alcoolInput),
        gasolina: formatarMoeda(gasolinaInput)
      })
    }

  }

  function formatarMoeda(valor: number) {
    return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
      <div>
        <main className='container'>
          <img src={logoImg} alt='Logo da calculadora ' className='logo'/>
          <h1 className='title'>Qual a melhor opção?</h1>

          <form className="form" onSubmit={calcular}>
          <label htmlFor="alcool">Alcool (preço por litro)</label>
          <input 
            type="number" 
            className='input'
            placeholder='4.90' 
            min="1" 
            step="0.01" 
            value= {alcoolInput}
            onChange = {(e) => setAlcoolInput(Number(e.target.value))}
            required/>

          <label htmlFor="alcool">Gasolina (preço por litro)</label>
            <input 
              type="number" 
              className='input'
              placeholder='4.90' 
              min="1" 
              step="0.01" 
              value= {gasolinaInput}
              onChange = {(e) => setGasolinaInput(Number(e.target.value))}
              required/>

            <input type="submit" value="Calcular" className='button'/>
          </form>

          {info && Object.keys(info).length > 0 && (
            <section className='result'>
            <h2 className='result-title'>{info?.title}</h2>

            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>
          )}
          
        </main>
      </div>

  )
}

export default App
