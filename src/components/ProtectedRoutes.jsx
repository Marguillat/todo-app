import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/authHooks'

function ProtectedRoutes () {
  const { authData } = useAuth()
  return (
    authData?.token && authData?._user
      ? <Outlet /> // autorise l'acces au routes enfants
      : <Navigate to='/auth' /> // navige autre page
  )
}

export default ProtectedRoutes
