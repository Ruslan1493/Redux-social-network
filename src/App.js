import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profiler/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/dialogs" element={
              <DialogsContainer />}
            />
            <Route path="/profile" element={
              <ProfileContainer />}
            />
            <Route path="/users" element={
              <UsersContainer />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
