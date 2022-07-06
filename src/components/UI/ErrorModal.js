import ReactDOM from 'react-dom';
import Button from "./Button";
import styles from './ErrorModal.module.css'
import Card from "./Card";

const Backdrop = ({onClose}) => {
  return <div className={styles.backdrop} onClick={onClose}/>;
}

const OverlayModal = ({title, message, onClose}) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>{message}</div>
      <footer className={styles.actions}>
        <Button className={styles.ok} onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <>
      {
        ReactDOM.createPortal(
          <Backdrop {...props}/>,
          document.getElementById('backdrop-root')
        )
      }
      {
        ReactDOM.createPortal(
          <OverlayModal {...props}/>,
          document.getElementById('overlay-root')
        )
      }
    </>
  )
};

export default ErrorModal;