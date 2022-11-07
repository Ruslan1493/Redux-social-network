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
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />} />
            <Route path="/profile" element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
