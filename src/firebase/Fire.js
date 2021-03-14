import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAJwX4CFsWRZQ-Dcq5eJ0QriPHQJLjqp8k",
    authDomain: "chat-app-eb863.firebaseapp.com",
    databaseURL: "https://chat-app-eb863-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-app-eb863",
    storageBucket: "chat-app-eb863.appspot.com",
    messagingSenderId: "934065974980",
    appId: "1:934065974980:web:92eafe5fbd863e87b0a391",
    measurementId: "G-B2RKDLF1TY"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
// firebase.analytics();

export default fire