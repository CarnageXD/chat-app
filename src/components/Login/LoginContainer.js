import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import fire from "../../firebase/Fire";
import {
  authStatus,
  updateEmailText,
  updatePasswordText,
  submitAuthAction,
  setAuthError,
  clearAuthError,
} from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  state = {
    redirect: false,
  };

  handleSignin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(this.props.email, this.props.password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        this.setState({ redirect: true });
        this.props.submitAuthAction();
      })
      .catch((error) => {
        this.props.setAuthError(error.message);
      });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/profile" />;
    return (
      <Login
        email={this.props.email}
        password={this.props.password}
        isAuth={this.props.isAuth}
        handleSignin={this.handleSignin}
        updateEmailText={this.props.updateEmailText}
        updatePasswordText={this.props.updatePasswordText}
        authError={this.props.authError}
        clearAuthError={this.props.clearAuthError}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    authError: state.auth.authError,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  submitAuthAction,
  authStatus,
  updateEmailText,
  updatePasswordText,
  setAuthError,
  clearAuthError,
})(LoginContainer);
