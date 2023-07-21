import styles from './Todo.module.css'

export const Todo = ({ content, index, todo, setTodo }) => {
  function remove(index) {
    const newTodoArr = [...todo]
    newTodoArr.splice(index, 1)
    setTodo(newTodoArr)
  }
  return (
    <li
      className={styles.todoItem}
      onDoubleClick={() => remove(index)}>
      {content}
    </li>
  )
}
