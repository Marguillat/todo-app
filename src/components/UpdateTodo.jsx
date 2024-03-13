
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import UpdateForm from "./UpdateForm"

function UpdateTodo({ isOpen, onOpen, onOpenChange,onUpdateTodo, title, description, status,important,id }) {
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
              <UpdateForm onSubmit={onUpdateTodo} 
                todoId={id}
                title={title}
                description={description}
                status={status}
                important={important}
                />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Fermer
              </Button>
              <Button color='primary' onPress={onClose}>
                Ajouter
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
     )
}

export default UpdateTodo;