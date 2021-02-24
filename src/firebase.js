import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtEkDcEC5lrMchMemO3pbSL0uAQz_Zk28",
    authDomain: "clone-d462d.firebaseapp.com",
    projectId: "clone-d462d",
    storageBucket: "clone-d462d.appspot.com",
    messagingSenderId: "227520476545",
    appId: "1:227520476545:web:7c0160c2c3ebe940a26480",
    measurementId: "G-SQ63D359XG"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };