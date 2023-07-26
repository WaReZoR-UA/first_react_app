import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = ({ todos, removeTodo, complitTogle }) => {
  return (
    <ul className={styles.todoList}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            complitTogle={complitTogle}
          />
        )
      })}
    </ul>
  )
}
