import Button from "./Button";
import styles from './ErrorModal.module.css'
import Card from "./Card";

const ErrorModal = ({title, message, onClose}) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>{message}</div>
        <footer className={styles.actions}>
          <Button className={styles.ok} onClick={onClose}>Okay</Button>
        </footer>
      </Card>
    </>
  )
};

export default ErrorModal;