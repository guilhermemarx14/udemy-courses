import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import './App.css';


function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const firstRender = useRef(true)
  const [input, setInput] = useState('')

  const [tasks,setTasks] = useState<string[]>([])

  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  })

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('@cursoreact')
    
    if(tarefasSalvas){
      setTasks(JSON.parse(tarefasSalvas))
    }
  }, [])

  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false
      return
    }

    localStorage.setItem('@cursoreact', JSON.stringify(tasks))
  },[tasks])

  function handleDelete(item: string) {
    const newTasks = tasks.filter(task => task !== item)
    setTasks(newTasks)
  }
  
  function handleEditar(item: string) {
    inputRef.current?.focus()
    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }
  const handleSalvarEdicao = useCallback(() => {
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks];
    allTasks[findIndexTask] = input
    console.log(allTasks[findIndexTask])
    setTasks(allTasks)
    setEditTask({
      enabled: false,
      task: ''
    })
    setInput('')

  },[editTask.task, input, tasks])

  const handleSalvar = useCallback(() => {
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
  },[input, editTask.enabled, tasks, handleSalvarEdicao])


  const totalTasks = useMemo(() => tasks.length, [tasks])

  return (
    <div className='container'>
      <h1>Lista de tarefas</h1>

      <input placeholder='Digite uma tarefa'
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          }
        }
        ref={inputRef} 

        />
        
      <button onClick={handleSalvar}>
        {editTask.enabled ? "Atualizar Tarefa": "Adicionar tarefa"}
      </button>

      <hr />
      <strong>Você tem {totalTasks} tarefas!</strong>
      <br/><br/>
      {
        tasks.map((item, index) => (
          <section key={item} >
            <span>{item}</span>
            <div className="actions">
              <button onClick={() => handleEditar(item)}>Editar</button>
              <button onClick={() => handleDelete(item)} >Excluir</button>
            </div>
            
          </section>
        ))
      }
    </div>

  )
}

export default App
