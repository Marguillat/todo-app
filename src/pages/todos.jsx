import TodoList from '../components/TodoList'
import AddTodo from '../components/addTodo'
import { useTodos } from '../hooks/todosHooks'

function Todos () {
  const { todos } = useTodos()
  return (
    <>
      <TodoList
        todos={todos}
      />
      <AddTodo className='z-10' />
    </>
  )
}

export default Todos
