import { useCallback, useEffect, useState } from 'react'
import { apiAddTodo, apiDeleteTodo, apiGetTodos, apiUpdateTodo } from '../services/Api'
import { useBetween } from 'use-between'
import { useAuth } from './authHooks'
function useTodos () {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { authData } = useAuth()

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const todosData = await apiGetTodos()
      // set le todos sur la réponse de l'api
      setTodos(todosData)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
      console.error(error)
    }
  }, [])

  const addTodo = useCallback(async (todo) => {
    try {
      const todosData = await apiAddTodo(todo)
      // change mes todos à chaque requette
      setTodos(todosData)
    } catch (error) {
      setError(error)
      setLoading(false)
      console.error(error)
    }
  }, [])

  const deleteTodo = useCallback(async (idTodo) => {
    try {
      console.log(idTodo)
      const todosData = await apiDeleteTodo(idTodo)
      console.log(todosData)

      setTodos(todosData)
    } catch (error) {
      setError(error)
      setLoading(false)
      console.error(error)
    }
  }, [])

  const updateTodo = useCallback(async (updatedTodo) => {
    try {
      const todosData = await apiUpdateTodo(updatedTodo)
      setTodos(todosData)
    } catch (error) {
      setError(error)
      setLoading(false)
      console.error(error)
    }
  }, [])

  useEffect(() => {
    // effectue la requette
    getData()
  }, [authData])

  return {
    todos,
    loading,
    error,
    getData,
    addTodo,
    deleteTodo,
    updateTodo
  }
}

const useTodosSharable = () => useBetween(useTodos)

export { useTodosSharable as useTodos }
