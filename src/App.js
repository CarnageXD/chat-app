import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import fire from "./firebase/Fire";
import { authStatus, updateCurrentUser } from "./redux/auth-reducer";
import { connect } from "react-redux";
import { setRoutes } from "./routes/routes";
import Preloader from "./components/common/Preloader";

class App extends React.Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.authStatus(true);
        this.props.updateCurrentUser(user.uid);
      } else {
        // No user is signed in.
        this.props.authStatus(false);
      }
    });
    const db = fire.firestore();
    db.collection("userProfile")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs;
        data.forEach((doc) => {
          if (this.props.currentUser === doc.data().userId) {
            this.props.setUserProfile(
              doc.data().username,
              doc.data().userAvatar
            );
          }
        });
      })
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }
  render() {
    if (this.state.loading) return <Preloader />;
    const routes = setRoutes(this.props.isAuth);
    return (
      <div className="App">
        <div className="appHeader">
          <HeaderContainer />
        </div>
        <div className="appContent">{routes}</div>
        <div className="appFooter">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  currentUser: state.auth.isAuth,
});

export default connect(mapStateToProps, { authStatus, updateCurrentUser })(App);
