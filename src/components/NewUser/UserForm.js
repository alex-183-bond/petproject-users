import {useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from './UserForm.module.css'

const UserForm = ({onAddUser, onInvalidUser}) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      onInvalidUser("Please enter a valid name and age (non-empty values)");
      return;
    }
    if (+age < 0) {
      onInvalidUser("Please enter a valid age (> 0)");
      return;
    }

    onAddUser({name, age});

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };


  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
