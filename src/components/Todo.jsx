import { Button, Card, CardHeader, Image, useDisclosure } from '@nextui-org/react'
import DeleteTodo from './DeleteTodo'
import UpdateTodo from './UpdateTodo'
function Todo ({ title, description, status,id,important,onDeletion,onUpdateTodo}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Card isPressable='true' onPress={onOpen}>
        <CardHeader className='flex gap-3'>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
            width={40}
          />
          <div className='flex flex-col'>
            <p className='text-md'>{title}</p>
            <p className='text-small text-default-500'>{description}</p>
            <p className='text-small text-default-500'>{status}</p>
          </div>
          <DeleteTodo onDeletion={onDeletion} id={id}/>
        </CardHeader>
      </Card>
      <UpdateTodo
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
                title={title}
                description={description}
                status={status}
                important={important}
                id={id}
                onUpdateTodo={onUpdateTodo}
      />
    </>
  )
}

export default Todo
