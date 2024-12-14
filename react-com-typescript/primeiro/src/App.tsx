import { Header } from './components/header'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer'

export default function App(){
  return(
    <div>
    <Header title='Meus alunos'/>
    <Aluno nome="Guilherme Marx" idade={27}/>
    <Aluno nome="José Souza" idade={22}/>
    <Footer/>
    </div>
  )
}
