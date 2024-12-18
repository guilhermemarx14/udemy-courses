import { useState } from 'react'



function App() {
  const [input, setInput] = useState('')

  const [tasks,setTasks] = useState([
    "Estudar React",
    "Comprar pão",
    "Estudar CSS"
  ])

  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  })

  function handleDelete(item: string) {
    const newTasks = tasks.filter(task => task !== item)
    setTasks(newTasks)
  }
  
  function handleEditar(item: string) {
    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }

  function handleSalvarEdicao(){
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    console.log(findIndexTask)
    const allTasks = [...tasks];
    allTasks[findIndexTask] = input
    console.log(allTasks[findIndexTask])
    setTasks(allTasks)
    setEditTask({
      enabled: false,
      task: ''
    })
    setInput('')
  }
  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input placeholder='Digite uma tarefa'
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
      }
        } />
        
      <button onClick={() => {
        if(!input) {
          alert('Digite uma tarefa')
          return;
        }
        if(editTask.enabled) {
          handleSalvarEdicao()
          return;
        }  
        setTasks([...tasks, input])
        setInput('')
      }}>
        {editTask.enabled ? "Atualizar Tarefa": "Adicionar tarefa"}
      </button>

      <hr />
      {
        tasks.map((item, index) => (
          <section key={item} >
            <span>{item}</span>
            <button onClick={() => handleEditar(item)}>Editar</button>
            <button onClick={() => handleDelete(item)} >Excluir</button>
          </section>
        ))
      }
    </div>

  )
}

export default App
