<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profiler/Profile";

function App(props) {
=======
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profiler/Profile';


function App() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <Route exact path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
=======
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
=======
>>>>>>> bb68ec668aaab0638c7113139fc208a3b7d55436
  );
}

export default App;
