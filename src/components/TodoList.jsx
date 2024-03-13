import Todo from './Todo'
function TodoList ({ todos,onTodoDeletion,onUpdateTodo }) {
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
                  important={todo.important}
                  onDeletion={onTodoDeletion}
                  onUpdateTodo={onUpdateTodo}
              />
          )
        })
      }
    </div>

  )
}

export default TodoList
