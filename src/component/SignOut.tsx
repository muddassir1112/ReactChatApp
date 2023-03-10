import React from "react";
import { auth } from "../firebase";
export const SignOut = () => {
  // function to signout from the chat by using firebase signout authorization
  const handleLogOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <a
        href="#0"
        onClick={handleLogOut}
        className="btn btn-danger btn-lg btn-logout"
      >
        Log out
      </a>
    </div>
  );
};
