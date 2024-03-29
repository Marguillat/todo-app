import { useCallback, useEffect, useState } from 'react'
import { apiAddTodo, apiDeleteTodo, apiGetTodos, apiGetTodosOfStatus, apiUpdateTodo } from '../services/Api'
import { useBetween } from 'use-between'
import { useAuth } from './authHooks'
function useTodos () {
  const [todos, setTodos] = useState([])
  const [doneTodos, setDoneTodos] = useState([])
  const [awaitingTodos, setAwaitingTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { authData } = useAuth()

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      const todosData = await apiGetTodos()
      setLoading(false)
      // set le todos sur la réponse de l'api
      setTodos(todosData)
    } catch (error) {
      setLoading(false)
      setError(error)
      console.error(error)
    }
  }, [])

  const getTodosOfStatus = useCallback(async (status) => {
    try {
      setLoading(true)
      const todosData = await apiGetTodosOfStatus(status)
      setLoading(false)
      // set le todos sur la réponse de l'api
      setDoneTodos(todosData)
      console.log(todosData)
    } catch (error) {
      setLoading(false)
      setError(error)
      console.error(error)
    }
  }, [])

  const getAwaitingTodos = useCallback(async (status) => {
    try {
      setLoading(true)
      const todosData = await apiGetTodosOfStatus(status)
      setLoading(false)
      // set le todos sur la réponse de l'api
      setAwaitingTodos(todosData)
      console.log(todosData)
    } catch (error) {
      setLoading(false)
      setError(error)
      console.error(error)
    }
  }, [])

  const addTodo = useCallback(async (todo) => {
    try {
      setLoading(true)
      const todosData = await apiAddTodo(todo)
      // change mes todos à chaque requette
      setTodos(todosData)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
      console.error(error)
    }
  }, [])

  const deleteTodo = useCallback(async (idTodo) => {
    try {
      setLoading(true)
      const todosData = await apiDeleteTodo(idTodo)
      setTodos(todosData)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
      console.error(error)
    }
  }, [])

  const updateTodo = useCallback(async (updatedTodo) => {
    try {
      setLoading(true)
      const todosData = await apiUpdateTodo(updatedTodo)
      setTodos(todosData)
      setLoading(false)
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
    doneTodos,
    awaitingTodos,
    getData,
    addTodo,
    deleteTodo,
    updateTodo,
    getTodosOfStatus,
    getAwaitingTodos
  }
}

const useTodosSharable = () => useBetween(useTodos)

export { useTodosSharable as useTodos }
