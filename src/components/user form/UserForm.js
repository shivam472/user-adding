import React, { useState } from "react";
import Modal from "../UI/Modal";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = { username: enteredUsername, age: enteredAge };

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onSubmission(userData);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const confirm = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <Modal
          title={error.title}
          errorMessage={error.message}
          onConfirm={confirm}
        />
      )}
      <form className="user-form" onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input
          type="text"
          value={enteredUsername}
          onChange={usernameInputChangeHandler}
        ></input>
        <label>Age (Years)</label>
        <input
          type="Number"
          value={enteredAge}
          onChange={ageInputChangeHandler}
        ></input>
        <button type="submit">Add User</button>
      </form>
    </React.Fragment>
  );
};

export default UserForm;
