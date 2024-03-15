import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import UpdateForm from '../forms/UpdateForm'

function UpdateTodo ({ isOpen, onOpen, onOpenChange, onUpdateTodo, title, description, status, important, id }) {
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
            <ModalHeader className='flex flex-col gap-1'>Changer la tâche</ModalHeader>
            <ModalBody>
              <UpdateForm
                todoId={id}
                title={title}
                description={description}
                status={status}
                important={important}
                onClose={onClose}

              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default UpdateTodo
