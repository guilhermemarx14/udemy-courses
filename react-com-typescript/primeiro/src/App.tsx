export default function App(){
  return(
    <div>
    <h1>Meu projeto</h1>
    <Aluno nome="Guilherme Marx" idade={27}/>
    <Aluno nome="José Souza" idade={22}/>
    </div>
  )
}

interface AlunoProps{
  nome: string
  idade: number
}

function Aluno({nome, idade}: AlunoProps){
  return(
    <div>
    <h2>Nome: {nome}</h2>
    <h3>Idade: {idade}</h3>
    </div>
    
  )
}