import { Todo } from './Todo'
import styles from './TodoList.module.css'

export const TodoList = ({ todo, setTodo }) => {
  return todo.length <= 0 ? (
    <>
      <h2>Todo list is empty</h2>
    </>
  ) : (
    <ul className={styles.todoList}>
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
