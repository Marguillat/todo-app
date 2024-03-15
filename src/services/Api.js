import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

async function apiGetTodos () {
  // fetch avec axios sur l'url de l'api
  const todos = await axios.get(API_URL + '/todos')
  console.log(todos)
  return todos.data
}

async function apiAddTodo (todo) {
  const response = await axios.post(API_URL + '/todos', todo)
  console.log(response)
  return response.data
}

async function apiDeleteTodo (idTodo) {
  const response = await axios.delete(API_URL + '/todos', { data: { _id: idTodo } })
  return response.data
}

async function apiUpdateTodo (updatedTodo) {
  const response = await axios.put(API_URL + '/todos', updatedTodo)
  return response.data
}

async function apiLogin (credentials) {
  const response = await axios.post(API_URL + '/auth/login', credentials)
  return response.data
}

export {
  apiGetTodos,
  apiAddTodo,
  apiDeleteTodo,
  apiUpdateTodo,
  apiLogin
}
