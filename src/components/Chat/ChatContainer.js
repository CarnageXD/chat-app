import React from "react";
import { connect } from "react-redux";
import Chat from "./Chat";
import fire from "../../firebase/Fire";
import firebase from "firebase/app";
import {
  updateMessageText,
  setUserProfile,
  updateMessages,
  submitAuthAction,
} from "./../../redux/auth-reducer";

class ChatContainer extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
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
      });
    db.collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        let messages = [];
        snapshot.forEach((doc) =>
          messages.push({
            userId: doc.data().uid,
            text: doc.data().text,
            username: doc.data().username,
            userAvatar: doc.data().userAvatar,
            createdAt: doc.data().createdAt,
          })
        );
        this.props.updateMessages(messages);
        this.setState({ isLoading: false });
      });
  }

  sendMessage = async () => {
    const dbMessages = fire.firestore().collection("messages");
    if (this.props.text !== "") {
      dbMessages.add({
        uid: this.props.currentUser,
        text: this.props.text,
        userAvatar: this.props.userAvatar,
        username: this.props.username,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      this.props.submitAuthAction();
      this.props.updateMessages(this.props.messages);
    }
  };

  render() {
    return (
      <Chat
        {...this.props}
        sendMessage={this.sendMessage}
        isLoading={this.state.isLoading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.auth.text,
    username: state.auth.username,
    userAvatar: state.auth.userAvatar,
    currentUser: state.auth.currentUser,
    isFetching: state.auth.isFetching,
    messages: state.auth.messages,
  };
};

export default connect(mapStateToProps, {
  updateMessageText,
  setUserProfile,
  updateMessages,
  submitAuthAction,
})(ChatContainer);
