import { AiOutlineClose } from "react-icons/ai";
import styles from "./Modal.module.css";

export default function Modal({ active, setActive, authUser }) {
  return (
    <div className={active ? styles.modal : styles.hide}>
      {authUser ? (
        <p className={styles.success}>Добро пожаловать!</p>
      ) : (
        <p className={styles.fail}>Email или Пароль не верны!</p>
      )}
      <AiOutlineClose
        onClick={() => setActive(false)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
