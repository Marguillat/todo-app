import Todo from './Todo'
function TodoList ({ todos,onTodoDeletion }) {
  return (
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
                  onDeletion={onTodoDeletion}
              />
          )
        })
      }
    </div>

  )
}

export default TodoList
