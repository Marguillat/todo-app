import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import { useAuth } from '../hooks/authHooks'
import RegisterForm from '../components/forms/RegisterForm'

function Register () {
  const navigate = useNavigate()
  const { authData } = useAuth()
  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])
  return (
    <RegisterForm />
  )
}

export default Register
