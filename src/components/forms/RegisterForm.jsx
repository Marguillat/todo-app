import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../../hooks/authHooks'
import { Link } from 'react-router-dom'

function RegisterForm () {
  const { register, loading } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      // spread opérator qui recopier tout form data
      // clé dynamique qui est égal à la value
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    register(formData)
  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <Input
        name='lastName' // doit être egal à value
        type='text'
        label='Nom'
        onChange={handleChange}
        value={formData.lastName}
      />
      <Input
        name='firstName' // doit être egal à value
        type='text'
        label='Prénom'
        onChange={handleChange}
        value={formData.firstName}
      />
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

      <Button type='submit' isLoading={loading}>
        Créer un compte
      </Button>
      <Link to='/auth' className='m-auto hover:underline'>Se connecter</Link>
    </form>
  )
}

export default RegisterForm
