import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHooks'

function Auth () {
  const navigate = useNavigate()
  const { authData } = useAuth()
  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])
  return (
    <LoginForm />
  )
}

export default Auth
