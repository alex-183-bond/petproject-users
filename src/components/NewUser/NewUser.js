import UserForm from "./UserForm";
import ErrorModal from "../UI/ErrorModal";
import {useState} from "react";


const NewUser = ({onAddUser}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const addUserHandler = (userData) => {
    onAddUser({...userData, id: Math.random().toString()});
    setErrorMessage('');
  };

  const invalidUserHandler = (message) => {
    setErrorMessage(message);
  };

  const hideValidationModalHandler = () => {
    setErrorMessage('');
  }

  return (
    <>
      <UserForm onAddUser={addUserHandler} onInvalidUser={invalidUserHandler}/>
      {errorMessage &&
        <ErrorModal
          title="An error occurred"
          message={errorMessage}
          onClose={hideValidationModalHandler}/>
      }
    </>
  )
};

export default NewUser;