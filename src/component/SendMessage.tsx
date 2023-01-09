import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { auth, db } from "../firebase";
// type define of scroll 
type ScrollType = {
  scroll: any;
};
export const SendMessage = (props: ScrollType) => {
  const date = new Date();
  const [msg, setMsg] = useState<string>("");
  async function sendMessage() {
    // destructuring of the parameters as per auth.currentUser
    const { uid, photoURL, displayName } = auth.currentUser as any;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
    // firebase time stamp
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      timeStamp: date.toLocaleTimeString(),
      displayName,
    });
    setMsg(" ");
    props.scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control input"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          className="btn btn-success text-light btn-lg"
          type="button"
          id="button-addon2"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};
