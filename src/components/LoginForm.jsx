import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHooks'

function LoginForm () {
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setFormData({
      ...formData, // spread opérator qui recopier tout form data
      // clé dynamique qui est égal à la value
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
    console.log('login')
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <Input
        name='email'
        type='email'
        label='Email'
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        onChange={handleChange}
        value={formData.password}
      />

      <Button type='submit'>
        Se connecter
      </Button>
      {/* <Button onPress={logout} color='danger'>se deconnecter</Button> */}
      {/* <pre>{JSON.stringify(authData, null, 2)}</pre> */}
    </form>
  )
}

export default LoginForm
