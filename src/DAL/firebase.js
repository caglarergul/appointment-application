// src/firebase.js
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCmhImz99bk4bMjKH0MvIhHoQhjAiAc0rw",
    authDomain: "appointment-app-8887b.firebaseapp.com",
    databaseURL: "https://appointment-app-8887b.firebaseio.com",
    projectId: "appointment-app-8887b",
    storageBucket: "appointment-app-8887b.appspot.com",
    messagingSenderId: "620225010537"
};
firebase.initializeApp(config);
export default firebase;