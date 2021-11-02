import React from "react";
import { connect } from "react-redux";
import fire from "./../../firebase/Fire";
import { Redirect } from "react-router-dom";
import EditProfile from "./EditProfile";
import {
  setUserProfile,
  updateUsernameText,
  updateUserAvatar,
  toggleIsFetching,
} from "../../redux/auth-reducer";
import { compose } from "redux";
import Preloader from "../common/Preloader";

class EditProfileContainer extends React.Component {
  state = {
    redirect: false,
    isAuth: false,
  };

  setDataBaseProfileData = () => {
    const dbUserProfile = fire.firestore().collection("userProfile");
    dbUserProfile.get().then((snapshot) => {
      const data = snapshot.docs;
      let exists = false;
      data.forEach((doc) => {
        console.log(this.props.currentUser);
        console.log(doc.data().userId);
        if (this.props.currentUser === doc.data().userId) {
          exists = true;
          dbUserProfile.doc(doc.id).update({
            username: `${this.props.username}`,
            userAvatar: `${this.props.userAvatar}`,
          });
        }
      });
      if (!exists) {
        dbUserProfile.add({
          username: `${this.props.username}`,
          userId: `${this.props.currentUser}`,
          userAvatar: `${this.props.userAvatar}`,
        });
      }
    });
    this.setState({ redirect: true });
  };
  onFileChange = async (file) => {
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const userAvatarUrl = await fileRef.getDownloadURL();
    this.props.updateUserAvatar(userAvatarUrl);
  };

  render() {
    if (this.state.redirect) return <Redirect to="/profile" />;
    return (
      <>
        <EditProfile
          onFileChange={this.onFileChange}
          updateUsernameText={this.props.updateUsernameText}
          setDataBaseProfileData={this.setDataBaseProfileData}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    userAvatar: state.auth.userAvatar,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    toggleIsFetching,
    updateUsernameText,
    updateUserAvatar,
  })
)(EditProfileContainer);
