import User from "./User";
import styles from "./Users.module.css";
import Card from "../UI/Card";

const Users = ({users}) => {
  if (users.length === 0) {
    return null;
  }

  return (
    <Card className={styles.users}>
      <ul>
        {users.map(user =>
          <User key={user.id} name={user.name} age={user.age}/>
        )}
      </ul>
    </Card>
  )
};

export default Users;