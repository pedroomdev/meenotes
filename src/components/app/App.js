import React from 'react';
import './App.css';
import SignIn from '../sign-in';
import { Router } from "@reach/router"


function App() {
  return (
    <Router>
      <SignIn path="/" />
      <SignIn path="/signin" />
    </Router>
  );
}

export default App;
