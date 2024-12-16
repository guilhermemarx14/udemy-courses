import{ useState } from 'react'

interface InfoAlunoProps{
  nome: string
  idade: string
}

export default function App(){
  
  const[input, setInput] = useState('')
  const[idade, setIdade] = useState('')
  const[infoAluno, setInfoAluno] = useState<InfoAlunoProps>()
  const[contador, setContador] = useState(0)

  function adicionar(){
    setContador(contador + 1)
  }
  
  function subtrair(){
    if(contador === 0)
      return;
    setContador(contador - 1)
  }

  function mostrarAluno(){
    setInfoAluno({nome: input, idade: idade})
  }
  
  return(
    <div>
      <h1>Conhecendo useState</h1>
      <input placeholder="Digite o nome" value={infoAluno?.nome} onChange={(e) => setInput(e.target.value)}/>
      <br/><br/> 
      <input placeholder="Digite a idade" value={infoAluno?.idade} onChange={(e) => setIdade(e.target.value)}/>
    
      <br/><br/>
    
      <button onClick={mostrarAluno}>Mostrar Aluno</button>
      <br/>
      <hr/>
      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h4>Idade: {infoAluno?.idade}</h4>
      <hr/>
      <h1> Contador com useState</h1>

      <button onClick={adicionar}>+</button> {contador} <button onClick={subtrair}> -</button>
    </div>
  )
}
