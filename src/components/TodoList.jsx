import { useTodos } from '../hooks/todosHooks'
import Todo from './Todo'

import { Spinner } from '@nextui-org/react'
function TodoList ({ todos }) {
  const { loading } = useTodos()
  return (
    <>
      <div className='flex flex-col gap-4 lg:grid-cols-3 lg:grid'>
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
      </div>
      {loading ? <Spinner /> : null}
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
