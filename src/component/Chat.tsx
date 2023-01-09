import React from "react";
import "./Chat.css";
import { auth } from "../firebase";
// typescript defined for all the keys in an array which has to be mapped
type UserDetails = {
  chat: {
    text: string | null;
    photoURL: string | undefined;
    uid: string;
    timeStamp: number | null;
    displayName: string;
  }[];
};
export const Chat = (props: UserDetails) => {
  return (
    <div className="container">
      <div className="msgs">
        {/* conditional rendering to print the chat */}
        {props.chat.length > 0
          ? props.chat.map((ele, index) => (
              <div
                className={`msg ${
                    // conditional rendering to switch the class name as per the sender or receiver
                  ele.uid === auth.currentUser?.uid ? "sent" : "received"
                }`}
              >
                <img src={ele.photoURL} alt="..." />
                &nbsp;&nbsp;
                <span>{ele.text}</span>
                <p>
                  <small style={{ fontSize: "11px" }}>{ele.displayName}</small>
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
