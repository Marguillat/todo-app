import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../../hooks/authHooks'

function LoginForm () {
  const { login, register } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      // spread opérator qui recopier tout form data
      // clé dynamique qui est égal à la value
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }

  const handleRegister = (e) => {
    register(formData)
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
      <Button onPress={handleRegister} variant='light' className='text-primary-700 font-semibold'>Créer un compte</Button>
    </form>
  )
}

export default LoginForm
