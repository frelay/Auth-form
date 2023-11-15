import { useState } from "react";
import Modal from "../Modal/Modal";
import users from "../../data/users.json";
import styles from "./AuthForm.module.css";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState({});
  const [modalActive, setModalActive] = useState(false);
  const isDisable = email && password ? false : true;

  function submitHandler(e) {
    e.preventDefault();

    const authUser = users.find((user) => {
      return (
        email.toLowerCase() === user.email.toLowerCase() &&
        password.toLowerCase() === user.password.toLowerCase()
      );
    });

    setAuthUser(authUser);
    setModalActive(true);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>аутентификация</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.loginBtn} type="submit" disabled={isDisable}>
          Войти
        </button>
      </form>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        authUser={authUser}
      />
    </>
  );
}
