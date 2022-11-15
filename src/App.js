import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profiler/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/dialogs" element={
              <DialogsContainer
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
