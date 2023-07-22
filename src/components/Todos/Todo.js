import {RiTodoFill} from "react-icons/ri"
import styles from './Todo.module.css'

export const Todo = ({ content, index, removeTodo}) => {
  return (
    <li
      className={styles.todoItem}
		  onDoubleClick={() => removeTodo(index)}>
		  < RiTodoFill className={styles.todoIcon} />
      <p className={styles.todoContent}>{content}</p>
    </li>
  )
}
