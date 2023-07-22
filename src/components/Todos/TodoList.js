import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = ({ todos, setTodos, removeTodo }) => {
  return (
    <ul className={styles.todoList}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((item, index) => {
        return (
          <Todo
            key={index}
            index={index}
            content={item}
            todos={todos}
            setTodos={setTodos}
            removeTodo={removeTodo}
          />
        )
      })}
    </ul>
  )
}
