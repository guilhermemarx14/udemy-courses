
interface AlunoProps{
    nome: string
    idade: number
}

export function Aluno({nome, idade}: AlunoProps){
    return(
        <div>
        <h2>Nome: {nome}</h2>
        <h3>Idade: {idade}</h3>
        </div>
        
    )
}