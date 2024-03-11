import './App.css'
import TodoList from './components/TodoList'

const todos = [
  {
    title: 'todo1',
    description: 'desc1'
  },
  {
    title: 'todo2',
    description: 'desc2'
  },
  {
    title: 'todo3',
    description: 'desc3'
  },
  {
    title: 'todo4',
    description: 'desc4'
  }
]
function App () {
  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

export default App
