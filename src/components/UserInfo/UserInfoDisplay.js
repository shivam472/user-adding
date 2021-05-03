import "./UserInfoDisplay.css";

const UserInfoDisplay = (props) => {
  return (
    <div className="user-info-box">
      {props.name} ({props.age} years old)
    </div>
  );
};

export default UserInfoDisplay;
