

# useContext 

Mainly used to pass data from parent to child component without using props. simply to avoid prop drilling.

will use provider and wrap the component inside provider


# useReducer

useReducer is used to manage complex state and state update logic in a single place.


the below 2 codes are traditional approaches to pass props

# import React from "react";
import Delhi from "./components/Delhi";
import "./App.css";

function App() {
  let gift = "Car";
  return (
    <>
      <h1> wanna know what is your birthday present</h1>
      <Delhi gift={gift} />
    </>
  );
}

export default App;


# import React from "react";
import { useState } from "react";
<!-- 
export default function Delhi({ gift }) {
  let [name, setName] = useState(""); -->
  <!-- return (
    <div>
      <p> {name}</p>
      <button onClick={() => setName(gift)}>
        Click for once to know your present
      </button>
    </div>
  );
} -->
