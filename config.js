import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDaaKGUt-uCLA-xTGKz5pq2bYTLzwIxg84",
  authDomain: "team-voting-67d55.firebaseapp.com",
  projectId: "team-voting-67d55",
  storageBucket: "team-voting-67d55.appspot.com",
  messagingSenderId: "122475262009",
  appId: "1:122475262009:web:0f99601ba7f918ee219de8",
  measurementId: "G-W37H2F80V1"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();