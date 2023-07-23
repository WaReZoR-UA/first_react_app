import {RiTodoFill} from "react-icons/ri"
import styles from './Todo.module.css'

export const Todo = ({ content, id, status, removeTodo }) => {
  return (
    <li
      className={styles.todoItem}
		  onDoubleClick={() => removeTodo(id)}>
		  < RiTodoFill className={styles.todoIcon} />
      <p className={styles.todoContent}>{content}</p>
    </li>
  )
}
