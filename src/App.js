import { useState } from 'react'
import { TodoForm } from './components/Todos/TodoForm'
import { TodoList } from './components/Todos/TodoList'
import './App.css'

export const App = () => {
  const [todo, setTodo] = useState([])

  function addTodoHendler(data) {
    setTodo(todo => [...todo, data])
  }
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm
        addTodoHendler={addTodoHendler}
      />
      <TodoList
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  )
}
