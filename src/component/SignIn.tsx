import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
export const SignIn = () => {
  //function to signin with the help of GoogleAuthProvider
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    //signInWithPopup means login window with a popup 
    auth.signInWithPopup(provider);
  };
  return (
    <div className="signIn_container">
      <h2>React Chat Application</h2>
      <small>Please Signin to Chat</small>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="..."
          />
        </div>
        <p className="btn-text" onClick={signInWithGoogle}>
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
};
