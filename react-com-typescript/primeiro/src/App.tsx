import{ useState } from 'react'

export default function App(){
  
  const[input, setInput] = useState('')
  const[aluno, setAluno] = useState('')
  const[idade, setIdade] = useState('')
  function mostrarAluno(){
    console.log(idade)
    setAluno(input)
  }
  
  return(
    <div>
    <h1>Conhecendo useState</h1>
    <input placeholder="Digite o nome" value={input} onChange={(e) => setInput(e.target.value)}/>
    <br/><br/>
    <input placeholder="Digite a idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
    
    <br/><br/>
    
    <button onClick={mostrarAluno}>Mostrar Aluno</button>
    <br/>
    <hr/>
    <h3>Bem vindo: {aluno}</h3>
    </div>
  )
}
