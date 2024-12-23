import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'O sucesso normalmente vem para quem está ocupado demais para procurar por ele.',
        'Para de perseguir o dinheiro e comece a perseguir o sucesso.',
        'A vida é melhor para aqueles que são sempre sinceros consigo mesmos.',
        'Aceite os desafios para que você possa sentir o sabor da vitória.',
        'É melhor falhar em originalidade do que ter sucesso em imitação.'
      ]
    },
    {
      id: 2,
      nome: 'Bem-estar',
      frases: [
        'A saúde é o resultado não só de nossos atos como também de nossos pensamentos.',
        'O homem sábio deve considerar que a saúde é a maior de todas as bênçãos humanas.',
        'Quem tem saúde tem esperança, e quem tem esperança tem tudo.',
        'O segredo da saúde mental e corporal está em não se lamentar pelo passado, não se preocupar com o futuro, nem se adiantar aos problemas, mas viver sabiamente o presente.'
      ]
    },

    {
      id: 3,
      nome: 'Bom dia',
      frases: [
        'Bom dia! Acorde e viva a vida, pois a felicidade só depende de nós.',
        'Bom dia! Que o dia comece bem e termine ainda melhor.',
        'Bom dia! Que o dia seja leve, alegre e produtivo.',
        'Bom dia! Que o dia seja repleto de amor e paz.'
      ]
    }
  ];
  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    const frase = allFrases[categoriaSelecionada].frases[Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)];
    setTextoFrase(`"${frase}"`);
  }

  return (
    <div className='container'>
    <img alt='Logo frases'
        src={logoImg}
        className='logo'
      />
      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {
          allFrases.map((item, index) => (
            <button key={item.id}
              className='category-button'
              style={{
                borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
                borderColor: "#1fa4db"
              }}
            onClick={() => handleSwitchCategory(index)}>{item.nome}</button>
          )
          )
        }
      </section>

      <button className='button-frase'
      onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
    </div>
  )
}

export default App
