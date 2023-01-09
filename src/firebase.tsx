import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0cbUqEQEEtK0l-WprqeKTr8LtMCZc-yA",
  authDomain: "chitchat-19cbe.firebaseapp.com",
  projectId: "chitchat-19cbe",
  storageBucket: "chitchat-19cbe.appspot.com",
  messagingSenderId: "980107776469",
  appId: "1:980107776469:web:bbd732202cec4ed5ea6d5c",
  measurementId: "G-Y57L6870YY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
