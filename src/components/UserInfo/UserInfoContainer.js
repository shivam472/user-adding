import UserInfoDisplay from "./UserInfoDisplay";
import "./UserInfoContainer.css";

const UserInfoContainer = (props) => {
  return (
    <div
      className={`user-info-container ${
        props.userListLength > 0 && "withPadding"
      }`}
    >
      {props.newUserInformation.map((userData) => (
        <UserInfoDisplay
          key={userData.id}
          name={userData.username}
          age={userData.age}
        />
      ))}
    </div>
  );
};

export default UserInfoContainer;
