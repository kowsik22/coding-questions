import React from "react";
import Delhi from "./components/Delhi";
import "./App.css";
import { GiftProvider } from "./context/ExampleContext";
function App() {
  let gift = "Car";
  return (
    <>
      <h1>Used useContext to pass the data from parent to child component</h1>

      <GiftProvider>
        <Delhi />
      </GiftProvider>
    </>
  );
}

export default App;
