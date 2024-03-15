import { useCallback, useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { apiLogin } from '../services/Api'
import { toast } from 'react-toastify'

// hooks qui peuvent etre utilisé partout
function useAuth () {
  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiLogin(credentials)
      setAuthData(response)
      window.localStorage.setItem('AUTH', JSON.stringify(response))// transforme objet => string
      if (response && response.token && response._user) {
        toast.success('vous êtes connecté')
      }
    } catch (error) {
      setError(error)
      setLoading(false)
      console.error(error)
    }
  }, [])

  const logout = useCallback(() => {
    setAuthData(null)
    toast.error('Vous êtes déco')
  }, [])

  useEffect(() => {
    const savedAuth = window.localStorage.getItem('AUTH')
    if (savedAuth) {
      setAuthData(JSON.parse(savedAuth))
    }
  }, [])

  useEffect(() => {
    if (authData) {
      window.localStorage.setItem('AUTH', JSON.stringify(authData))
    } else {
      window.localStorage.removeItem('AUTH')
    }
  }, [authData])// relance le composant où il est importé quand authData change de valeur
  return { authData, loading, error, login, logout }
}

// permet de partager la valeur de la fonctin à travers tous les composants
const useAuthSharable = () => useBetween(useAuth)

export { useAuthSharable as useAuth }
