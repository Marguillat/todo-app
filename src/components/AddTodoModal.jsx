import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import TodoForm from './TodoForm'
import { useTodos } from '../hooks/todosHooks'

function AddTodoModal ({ isOpen, onOpen, onOpenChange }) {
  const { addTodo } = useTodos()
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled
      placement='center'
      size='4xl'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Ajouter une nouvelle tâche</ModalHeader>
            <ModalBody>
              <TodoForm onSubmit={addTodo} onClose={onClose} />
            </ModalBody>

          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AddTodoModal
