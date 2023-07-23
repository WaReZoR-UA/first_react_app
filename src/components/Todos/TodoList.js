import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className={styles.todoList}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((item) => {
        const {text, status, id} = item
        return (
          <Todo
            key={id}
            id={id}
            content={text}
            status={status}
            removeTodo={removeTodo}
          />
        )
      })}
    </ul>
  )
}
