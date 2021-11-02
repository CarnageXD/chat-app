import { Redirect, Route, Switch } from "react-router-dom";
import SignupContainer from "./../components/Signup/SignupContainer";
import LoginContainer from "./../components/Login/LoginContainer";
import ProfileContainer from "./../components/Profile/ProfileContainer";
import EditProfileContainer from "./../components/EditProfile/EditProfileContainer";
import ChatContainer from "./../components/Chat/ChatContainer";

export const setRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/profile" exact>
          <ProfileContainer />
        </Route>
        <Route path="/editProfile" exact>
          <EditProfileContainer />
        </Route>
        <Route path="/chat" exact>
          <ChatContainer />
        </Route>
        <Redirect to="/profile" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/profile" exact>
        <ProfileContainer />
      </Route>
      <Route path="/signup" exact>
        <SignupContainer />
      </Route>
      <Route path="/login" exact>
        <LoginContainer />
      </Route>
      <Redirect to="/profile" />
      <Redirect to="/profile" />
    </Switch>
  );
};
