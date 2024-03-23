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
    <div className='px-4 py-4 m-auto max-w-[1024px]'>
      <RegisterForm />
    </div>
  )
}

export default Register
