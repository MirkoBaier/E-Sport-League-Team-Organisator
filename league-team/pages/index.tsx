import React, { useState, useEffect } from 'react';
import firebase from "../firebase/clientApp";
import Home from "./components/home";
import Login from "./components/auth";

export default function Start() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
      <div className="app">
        {user ? <Home user={user}/> : <Login/>}
      </div>
  );
}

