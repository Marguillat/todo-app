// import { useState } from 'react'
import Todo from './Todo'
// import { useDisclosure } from '@nextui-org/react'
// import AddTodoModal from './AddTodoModal'
function TodoList ({ todos }) {
  // const [todoToEdit, setTodoToEdit] = useState()
  // const { isOpen, onOpen, onOpenChange } = useDisclosure()
  //
  // const handleOpenEditModal = (todo) {
  //   setTodoToEdit(todo)
  //   onOpen
  // }

  if (!todos || todos.length < 1) {
    return (
      <div className='w-full flex flex-row items-center justify-center py-6'>
        <h2 className='font-bold text-lg'>Aucun todo 😞</h2>
      </div>
    )
  }
  return (
    <>
      <div className='flex flex-col gap-4 py-2 px-4'>
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
