import { Card, CardHeader, Image } from '@nextui-org/react'
import DeleteTodo from './DeleteTodo'
function Todo ({ title, description, status,id,onDeletion}) {
  return (
    <>
      <Card onPress={onOpen}>
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
    </>
  )
}

export default Todo
