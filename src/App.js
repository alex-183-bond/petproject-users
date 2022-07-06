import Users from "./components/Users/Users";
import {useState} from "react";
import NewUser from "./components/NewUser/NewUser";
import styles from './App.module.css'

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers(prevUsers => [...prevUsers, user]);
  };

  return (
    <div className={styles.container}>
      <NewUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;