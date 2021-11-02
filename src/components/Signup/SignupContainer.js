import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import fire from "../../firebase/Fire";
import { setUserProfile } from "./../../redux/auth-reducer";
import Signup from "./Signup";
import {
  authStatus,
  updateEmailText,
  updatePasswordText,
  submitAuthAction,
  setAuthError,
  clearAuthError,
} from "./../../redux/auth-reducer";

class SignupContainer extends React.Component {
  handleSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.props.email, this.props.password)
      .then((userCredential) => {
        // Signed in
        this.props.submitAuthAction();
        this.props.setUserProfile("noname", null);
      })
      .catch((error) => {
        this.props.setAuthError(error.message);
      });
  };

  render() {
    return (
      <Signup
        email={this.props.email}
        password={this.props.password}
        isAuth={this.props.isAuth}
        handleSignup={this.handleSignup}
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

// const mapDispatchToProps

export default connect(mapStateToProps, {
  submitAuthAction,
  authStatus,
  updateEmailText,
  updatePasswordText,
  setAuthError,
  setUserProfile,
  clearAuthError,
})(SignupContainer);
