import React from "react";
import "./App.css";
import Header from "./Components/Layouts/Header/Header";
import Main from "./Components/Layouts/Main/Main";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
