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
    <div className='px-4 py-4 m-auto max-w-[1024px]'>
      <LoginForm />
    </div>
  )
}

export default Auth
