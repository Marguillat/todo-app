import { Button, useDisclosure } from '@nextui-org/react'
import { FaCirclePlus } from 'react-icons/fa6'
import AddTodoModal from './modals/AddTodoModal'
function AddTodo () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button
        className='fixed bottom-8 right-8 w-16 h-16 z-20'
        radius='full'
        color='primary'
        isIconOnly
        variant='shadow'
        onPress={onOpen}
      >
        <FaCirclePlus size={64} />
      </Button>
      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>

  )
}

export default AddTodo
