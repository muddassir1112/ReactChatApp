import React, { useEffect, useState } from 'react';
import './App.css';
import { SignIn } from './component/SignIn';
import { auth, db } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Chat } from './component/Chat';

function App() {
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
    </>
  );
}

export default App;
