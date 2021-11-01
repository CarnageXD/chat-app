import React from "react";
import { authStatus, updateCurrentUser } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  currentUser: state.auth.isAuth,
});

export default connect(mapStateToProps, { authStatus, updateCurrentUser })(
  HeaderContainer
);
