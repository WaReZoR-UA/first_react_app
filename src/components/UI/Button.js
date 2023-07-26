import styles from './Button.module.css'

export const Button = (props) => {
  const {children, onClick, disabled = false, title} = props
  return (
    <>
      <button
        {...props}
        className={styles.todoButton__submit}
        title={title}
        onClick={onClick}
        disabled={disabled}>
        {children}
      </button>
    </>
  )
}
