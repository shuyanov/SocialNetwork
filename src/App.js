import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import './index'

import {Routes, Route } from "react-router-dom";
import Massag from './components/Dialog/Massag';
import DialogContainer from './components/Dialog/NewDialog/DialogContainer';



const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs"
            element={<DialogContainer />} />

          <Route path="/profile"
            element={<Profile/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
