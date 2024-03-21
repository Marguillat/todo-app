import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/todos'
import Auth from './pages/Auth'
import Register from './pages/Register'
import CustomNavbar from './components/CustomNavbar'
import ProtectedRoutes from './components/ProtectedRoutes'
function App () {
  return (
    <>
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route index path='/' element={<Todos />} />
          </Route>
          <Route path='/auth' element={<Auth />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
