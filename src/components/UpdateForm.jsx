import { Button, Input, Select, SelectItem, Switch, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import { useTodos } from '../hooks/todosHooks'

function UpdateForm ({ todoId, title, description, status, important, onClose }) {
  const { updateTodo } = useTodos()
  const [formData, setFormData] = useState({
    _id: todoId,
    title,
    description,
    status,
    important
  })

  // un évènement aura une fonction qui commencera par handle
  const handleChange = (event) => {
    setFormData({
      ...formData, // spread opérator qui recopier tout form data
      // clé dynamique qui est égal à la value
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTodo(formData)
    onClose()
  }
  return (
    <form
      className='flex flex-col gap-5'
      onSubmit={handleSubmit}
    >
      <Input
        name='title' // correspond à la clé de l'objet
        type='text'
        label='titre'
        labelPlacement='inside'
        variant='flat'
        // color='primary'
        value={formData.title}
        onChange={handleChange}
      />
      <Textarea
        name='description' // correspond à la clé de l'objet
        type='text'
        minRows={3}
        maxRows={10}
        label='description'
        labelPlacement='inside'
        variant='flat'
        // color='primary'
        value={formData.description}
        onChange={handleChange}
      />
      <Select
        name='status'
        label='status'
        variant='flat'
        defaultSelectedKeys={['TODO']}
        onChange={handleChange}
        value={[formData.status]}
      >
        <SelectItem key='TODO' textValue='To do' value='TODO'>To doooo</SelectItem>
        <SelectItem key='IN-PROGRESS' textValue='In progress' value='IN-PROGRESS'>In progress</SelectItem>
        <SelectItem key='DONE' textValue='Done' value='DONE'>Done</SelectItem>
        <SelectItem key='CANCELED' textValue='canceld' value='CANCELED'>canceld</SelectItem>
        <SelectItem key='ARCHIVED' textValue='archived' value='ARCHIVED'>archived</SelectItem>
      </Select>
      <Switch
        color='danger'
        isSelected={formData.important}
        onValueChange={(isChecked) => { setFormData({ ...formData, important: isChecked }) }}
      >
        Important
      </Switch>
      <Button type='submit'>
        Envoyer
      </Button>
    </form>
  )
}

export default UpdateForm
