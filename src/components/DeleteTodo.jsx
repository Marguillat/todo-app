import { FaDeleteLeft } from 'react-icons/fa6'
import { Button } from '@nextui-org/react'
import { useTodos } from '../hooks/todosHooks'
function DeleteTodo ({ id }) {
  const { deleteTodo } = useTodos()

  const handleDelete = (event) => {
    deleteTodo(id)
  }
  return (
    <Button
      onPress={handleDelete}
      isIconOnly
      color='danger'
      aria-label='Delete'
    >
      <FaDeleteLeft
        color='danger'
        className='w-10'
      />
    </Button>
  )
}

export default DeleteTodo
