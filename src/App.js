import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profiler/Profile";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/dialogs" element={
              <Dialogs
                store={props.store}
              />} />
            <Route path="/profile" element={
              <Profile
                store={props.store}
              />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
