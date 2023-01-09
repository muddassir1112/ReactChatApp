import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { SignIn } from './component/SignIn';
import { auth, db } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Chat } from './component/Chat';
import { SendMessage } from './component/SendMessage';
import { SignOut } from './component/SignOut';

function App() {
  const scroll = useRef() //to move to end of the chat automatically
  const [user] = useAuthState(auth as any);  // firebase hooks (useAuthState)
  const [messages, setMessages] = useState([]); // state array to print the messages
  // useEffect Hook used to load the messages in the array 
  useEffect(()=> {
      db.collection("messages").orderBy("createdAt").limit(60).onSnapshot(snapshot=>{
          setMessages(snapshot.docs.map(doc => doc.data() as never))
      })
  },[])
  return (
    <>
    {/* messages array passed as prop to the chat component */}
    {user ? <Chat chat = {messages} /> : <SignIn/>}
    <SendMessage scroll = {scroll}/>
    <div className="signOut_container">
        <SignOut />
      </div>
    <div ref = {scroll as any}></div>
    </>
  );
}

export default App;
