import { useState } from "react";
import UserFormContainer from "./components/user form/UserFormContainer";
import UserInfoContainer from "./components/UserInfo/UserInfoContainer";
import "./App.css";

const USER_INFO = [];
function App() {
  const [userInfo, setUserInfo] = useState(USER_INFO);

  const infoAddHandler = (newUserInfo) => {
    const newUserData = {
      ...newUserInfo,
      id: Math.random().toString(),
    };
    setUserInfo((prevUserInfo) => [...prevUserInfo, newUserData]);
  };

  return (
    <div className="App">
      <UserFormContainer onInfoReceived={infoAddHandler} />
      <UserInfoContainer
        newUserInformation={userInfo}
        userListLength={userInfo.length}
      />
    </div>
  );
}

export default App;
