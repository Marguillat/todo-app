import { useEffect } from 'react'
import cat from '../img/chat.svg'
import { useTodos } from '../hooks/todosHooks'
import TodoList from '../components/TodoList'
import AddTodo from '../components/addTodo'
import { Spinner } from '@nextui-org/react'

function Todos () {
  const { todos } = useTodos()
  const { doneTodos, getTodosOfStatus, awaitingTodos, getAwaitingTodos } = useTodos()
  useEffect(() => {
    getTodosOfStatus('done')
    getAwaitingTodos('awaiting')
  }, [todos])// je pense qu'il y a de meilleures solution mais cerveau moi cassé
  const { loading } = useTodos()
  if (!todos || todos.length < 1) {
    return (
      <div className='w-full flex flex-col items-center justify-center py-6 max-w-[1024px] m-auto'>
        <img
          src={cat}
          alt='chat'
          className='max-w-[500px] object-cover mt-20 mx-5'
        />
        {loading
          ? <Spinner />
          : <h2 className='font-bold text-lg mt-10'>Il n'y a rien ici, allons dormir</h2>}

      </div>
    )
  }
  return (
    <main className='px-4 py-4 m-auto max-w-[1024px]'>
      <h1 className='text-xl font-bold'>Vos tâches en cours</h1>
      <TodoList
        todos={awaitingTodos}
      />
      {
      !doneTodos || doneTodos.length > 0
        ? (
          <>
            <h2 className='text-lg font-bold mt-6'>Vos tâches terminées</h2>
            <TodoList
              todos={doneTodos}
            />
          </>

          )
        : null
      }

      <AddTodo className='z-10' />
    </main>

  )
}

export default Todos
