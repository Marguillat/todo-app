import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todos from './pages/todos'
import Auth from './pages/Auth'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Todos />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
