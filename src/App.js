import React from "react";
import "./App.css";
import Header from "./Components/Layouts/Header/Header";
import Main from "./Components/Layouts/Main/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
