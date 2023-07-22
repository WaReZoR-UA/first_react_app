import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = ({ todo, setTodo }) => {
  return (
    <ul className={styles.todoList}>
      {!todo.length && <h2>Todo list is empty</h2>}
      {todo.map((item, index) => {
        return (
          <Todo
            key={index}
            index={index}
            content={item}
            todo={todo}
            setTodo={setTodo}
          />
        )
      })}
    </ul>
  )
}
