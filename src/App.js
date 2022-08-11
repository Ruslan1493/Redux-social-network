import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profiler/Profile';

const dialogsData = [
  { id: 0, name: "Frazel" },
  { id: 1, name: "Bob" },
  { id: 2, name: "Ann" },
  { id: 3, name: "Tommy" },
];

const messagesData = [
  { id: 0, message: "Hi" },
  { id: 1, message: "How are you?" },
  { id: 2, message: "Yo" },
  { id: 3, message: "Hey" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
