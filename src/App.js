import { v4 } from 'uuid'
import { useState } from 'react'
import { TodoForm } from './components/Todos/TodoForm'
import { TodoList } from './components/Todos/TodoList'
import './App.css'

export const App = () => {
  const [todos, setTodos] = useState([])

  function addTodosHendler(data) {
    const newTask = {
      text: data,
      status: false,
      id: v4(),
    }

    setTodos((todos) => [...todos, newTask])
  }

  function removeTodoHendler(id) {
    setTodos(todos.filter((item) => id !== item.id))
  }
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm addTodos={addTodosHendler} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        removeTodo={removeTodoHendler}
      />
    </div>
  )
}
