import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profiler/ProfileContainer";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/dialogs" element={
              <DialogsContainer />}
            />
            <Route path="/profile/" element={
              <ProfileContainer />}
            />
            <Route path="/profile/:userId" element={
              <ProfileContainer />}
            />
            <Route path="/users" element={
              <UsersContainer />}
            />
            <Route path="/login" element={
              <Login />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
