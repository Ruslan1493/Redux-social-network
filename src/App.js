import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import { initializeApp } from "./components/Redux/app-reducer";
import withRouter from "./components/common/withRouter";
import withAuthRedirect from "./components/common/withAuthRedirect";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profiler/ProfileContainer";
import Login from "./components/Login/Login";
import { Mui } from "./components/TEST";
import Preloader from "./components/common/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
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
            <Route path="/mui" element={
              <Mui />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App);
