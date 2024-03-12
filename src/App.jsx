import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/addTodo'
import { addTodo, getTodos } from './services/Api'

function App () {
  const [todos, setTodos] = useState([]) // tableau vide pour le map avant le chargement

  // lance la requette api au lancement du composant
  useEffect(() => {
    const getData = async () => {
      const todosData = await getTodos()
      // set le todos sur la réponse de l'api
      setTodos(todosData)
    }

    // effectue la requette
    getData()
  }, [])

  const handleAddTodo = async (todo) => {
    await addTodo(todo)
  }

  return (
    <>
      <TodoList todos={todos} />
      <AddTodo onAddTodo={handleAddTodo} />
    </>
  )
}

export default App
