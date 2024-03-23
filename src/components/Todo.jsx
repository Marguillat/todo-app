import { Card, CardHeader, Image, useDisclosure } from '@nextui-org/react'
import DeleteTodo from './DeleteTodo'
import UpdateTodo from './modals/UpdateTodo'
import ImportantWarning from './ImportantWarning'
function Todo ({ title, description, status, id, important }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Card
        shadow='none'
        onPress={onOpen} isPressable
        className='mt-4 overflow-visible flex-1 bg-secondary-100 border-2 border-secondary-300'
      >
        {important
          ? <ImportantWarning />
          : <></>}
        <CardHeader className='flex gap-3'>
          <Image
            className='flex-grow'
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
            width={40}
          />
          <div className='flex justify-start items-start flex-col flex-grow max-w-[calc(100%-80px-(2*0.75rem))]'>
            <p className='text-md truncate w-[100%] text-left font-main'>{title}</p>
            <p className='text-small text-default-500 truncate w-[100%] text-left'>{description}</p>
            <p className='text-small text-default-500 truncate w-[100%] text-left'>{status}</p>
          </div>
          <div className='flex flex-col'>
            <DeleteTodo id={id} />
          </div>
        </CardHeader>
      </Card>
      <UpdateTodo // non optimisé mais c'était ma première idée
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        title={title}
        description={description}
        status={status}
        important={important}
        id={id}

      />
    </>
  )
}

export default Todo
