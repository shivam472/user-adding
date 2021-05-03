import React from "react";
import UserForm from "./UserForm";
import "./UserFormContainer.css";

const UserFormContainer = (props) => {
  const infoCollectionHandler = (userData) => {
    props.onInfoReceived(userData);
  };

  return (
    <React.Fragment>
      <div className="user-form-container">
        <UserForm onSubmission={infoCollectionHandler} />
      </div>
    </React.Fragment>
  );
};

export default UserFormContainer;
