import React from 'react'
import './App.css';
import { Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import SignupContainer from './components/Signup/SignupContainer';
import LoginContainer from './components/Login/LoginContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import EditProfileContainer from './components/EditProfile/EditProfileContainer';
import fire from './firebase/Fire'
import { authStatus, updateCurrentUser } from './redux/auth-reducer'
import { connect } from 'react-redux'
import ChatContainer from './components/Chat/ChatContainer';


class App extends React.Component {
  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.props.authStatus(true)
        this.props.updateCurrentUser(user.uid)
      } else {
        // No user is signed in.
        this.props.authStatus(false)
      }
    });
    const db = fire.firestore()
    db.collection('userProfile').get()
      .then(snapshot => {
        const data = snapshot.docs
        data.forEach((doc) => {
          if (this.props.currentUser === doc.data().userId) {
            this.props.setUserProfile(doc.data().username, doc.data().userAvatar)
          }
        })
      })
  }

  render() {
    return (
      <div className="App" >
        <div className='appHeader'>
          <HeaderContainer />
        </div>
        <div className='appContent'>
          <Route path='/' exact render={() => <ProfileContainer />} />
          <Route path='/signup' render={() => <SignupContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/editProfile' render={() => <EditProfileContainer />} />
          <Route path='/profile' render={() => <ProfileContainer />} />
          <Route path='/chat' render={() => <ChatContainer />} />
        </div>
        <div className='appFooter'>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  currentUser: state.auth.isAuth,
})

export default connect(mapStateToProps, { authStatus, updateCurrentUser })(App)
