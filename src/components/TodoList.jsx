import Todo from './Todo'
import cat from '../img/chat.svg'
import { useTodos } from '../hooks/todosHooks'
import { Spinner } from '@nextui-org/react'
function TodoList ({ todos }) {
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
    <>
      <div className='flex flex-col gap-4 py-2 px-4 max-w-[1024px] m-auto'>
        {
        todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              id={todo._id}
              title={todo.title}
              description={todo.description}
              status={todo.status}
              important={todo.important}
              // openEditModal{handleOpenEditModal}
            />
          )
        })
        }
        {loading ? <Spinner /> : null}
      </div>
      {/* <AddTodoModal
        onUpdateTodo{onUpdateTodo}
        isOpen{isOpen}
        onOpen{onOpen}
        onOpenChange{onOpenChange}
        todoToEdit{todoToEdit}
        /> */}
    </>

  )
}

export default TodoList
