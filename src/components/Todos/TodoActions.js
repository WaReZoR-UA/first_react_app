import { RiDeleteBinFill, RiLoopRightLine } from 'react-icons/ri'
import { Button } from '../UI/Button'
import styles from './TodoActions.module.css'

export const TodoActions = ({ resetTodos, deleteComplitedTodos, complitedTodosExist }) => {

  return (
    <div className={styles.todoAtcionsContainer}>
      <Button children={<RiLoopRightLine />} type={'button'} title={'Reset all todos'} onClick={resetTodos} />
      <Button children={<RiDeleteBinFill />} type={'button'} title={'Clear complited todos'} onClick={deleteComplitedTodos} disabled={!complitedTodosExist} />
    </div>
  )
}
