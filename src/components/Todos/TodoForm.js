import { useState } from 'react'
import { Button } from '../UI/Button'
import styles from './TodoForm.module.css'

export const TodoForm = ({ addTodos }) => {
  const [data, setData] = useState('')

  function hendlFormInput(e) {
    setData(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    addTodos(data)
    setData('')
  }

  return (
    <form
      className={styles.todoForm}
      action=''
      onSubmit={onSubmit}>
      <input
        className={styles.todoForm__input}
        type='text'
        name='todo'
        placeholder='Enter new todo'
        onChange={hendlFormInput}
        value={data}
      />
      <Button type='submit' title="Submit">Submit</Button>
    </form>
  )
}
