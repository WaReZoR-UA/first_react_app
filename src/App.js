import { useState } from 'react'
import { TodoForm } from './components/Todos/TodoForm'
import { TodoList } from './components/Todos/TodoList'
import './App.css'

export const App = () => {
  const [todos, setTodos] = useState([])

  function addTodosHendler(data) {
    setTodos(todos => [...todos, data])
  }
	
  function removeTodoHendler(index) {
    setTodos(todos.filter((_, i) => i !== index))
  }
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm
        addTodosHendler={addTodosHendler}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        removeTodo={removeTodoHendler}
      />
    </div>
  )
}
