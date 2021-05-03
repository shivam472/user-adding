import UserForm from "./UserForm";
import "./UserFormContainer.css";

const UserFormContainer = (props) => {
  const infoCollectionHandler = (userData) => {
    props.onInfoReceived(userData);
  };

  return (
    <div>
      <div className="user-form-container">
        <UserForm onSubmission={infoCollectionHandler} />
      </div>
    </div>
  );
};

export default UserFormContainer;
