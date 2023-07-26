import { v4 } from 'uuid'
import { useEffect, useState } from 'react'
import { TodoForm } from './components/Todos/TodoForm'
import { TodoActions } from './components/Todos/TodoActions'
import { TodoList } from './components/Todos/TodoList'
import './App.css'

export const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    window && setTodos(JSON.parse(window.localStorage.getItem('data')))
  }, [])
  useEffect(() => {
    window && window.localStorage.setItem('data', JSON.stringify(todos))
  }, [todos])

  const addTodosHendler = (data) => {
    const newTask = {
      text: data,
      status: false,
      id: v4(),
    }

    setTodos((todos) => [...todos, newTask])
  }

  const removeTodoHendler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id))
  }

  const complitTogleHendler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
      })
    )
  }

  const resetTodosHendler = () => {
    setTodos([])
  }

  const deleteComplitedTodosHendler = () => {
    setTodos(todos.filter((todo) => !todo.status))
  }

  const complitedTodosCount = todos.filter((todo) => todo.status).length

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm addTodos={addTodosHendler} />
      {!!todos.length && (
        <TodoActions
          resetTodos={resetTodosHendler}
          deleteComplitedTodos={deleteComplitedTodosHendler}
          complitedTodosExist={!!complitedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        removeTodo={removeTodoHendler}
        complitTogle={complitTogleHendler}
      />
      <h1>
        {complitedTodosCount > 0 &&
          `You have complited ${complitedTodosCount} ${
            complitedTodosCount > 1 ? 'todos' : 'todo'
          }`}
      </h1>
    </div>
  )
}
