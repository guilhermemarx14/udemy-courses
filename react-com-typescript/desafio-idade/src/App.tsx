import { useState, FormEvent} from 'react'
import './App.css'

function App() {
  const [inputNome, setInputNome] = useState('')
  const [inputAno, setInputAno] = useState<string>()
  const [idade, setIdade] = useState<number>()
  const [nome, setNome] = useState<string>()

  function capitalizeWords(str: string): string {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

  function calcular(event: FormEvent) {
    event.preventDefault()
    const anoAtual: number = new Date().getFullYear();

    if(inputAno !== undefined)
      setIdade(anoAtual - Number(inputAno));

    if (inputNome !== undefined)
      setNome(capitalizeWords(inputNome));

    setInputNome('')
    setInputAno('')
  }
  
  return (
    <div>
    <h1 className='titulo'>Descubra sua idade</h1>
    <main>
        <form className="form" onSubmit={calcular}>
          <label className="label" htmlFor="nome">Digite seu nome:</label>
          <input 
            className='input'
            placeholder='Digite seu nome'
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
            required />
          <label className="label" htmlFor="nome">Digite seu ano de nascimento:</label>
          <input 
            className='input'
            placeholder='Digite sua idade'
            value={inputAno}
            onChange={(e) => setInputAno(e.target.value)}
            required />
          <input type="submit" value="Descobrir Idade" className='button' />
        </form>
    
    
        {
          idade &&
          <p className='result'>{nome}, você tem {idade} anos</p>
        }
      </main>
      
    </div>
  )
}

export default App
