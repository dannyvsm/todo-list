import './App.css';
import React, { useState } from "react";
import Form from "./components/Form.jsx"

const App = () => {
  const handleForm = (userInput) => {
    console.log(userInput)
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <Form handleForm={handleForm}/>
      <h4>{userInput}</h4>
      <ul>
        <li>item one</li>
        <li>item two</li>
        <li>item three</li>
      </ul>
    </div>
  );
};

export default App;
