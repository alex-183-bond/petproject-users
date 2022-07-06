import {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from './UserForm.module.css'

const UserForm = ({onAddUser, onInvalidUser}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      onInvalidUser("Please enter a valid name and age (non-empty values)");
      return;
    }
    if (+age < 0) {
      onInvalidUser("Please enter a valid age (> 0)");
      return;
    }

    onAddUser({name, age});

    setName('');
    setAge('');
  };


  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={name}
          type="text"
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          value={age}
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
