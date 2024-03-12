import { Card, CardHeader, Image } from '@nextui-org/react'

function Todo ({ title, description, status }) {
  return (
    <Card>
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
      </CardHeader>
    </Card>
  )
}

export default Todo
