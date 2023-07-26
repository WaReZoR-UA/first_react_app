import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

export const Todo = ({ todo, removeTodo, complitTogle }) => {
  return (
    <li className={`${styles.todoItem} ${todo.status ? styles.completedTodo :''}`}>
      <RiTodoFill className={styles.todoIcon} />
      <p className={styles.todoContent}>{todo.text}</p>
      <RiDeleteBin2Line
        className={styles.todoTreshing}
        onClick={() => removeTodo(todo.id)}
      />
      <FaCheck
        className={styles.todoDone}
        onClick={() => complitTogle(todo.id)}
      />
    </li>
  )
}
