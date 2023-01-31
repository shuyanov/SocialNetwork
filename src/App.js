import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import './index'

import { Routes, Route } from "react-router-dom";
import Massag from './components/Dialog/Massag';
import DialogContainer from './components/Dialog/NewDialog/DialogContainer';
import UsersContainer from './components/Users/UserConteiner';



const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs"
            element={<DialogContainer />} />

          <Route path="/profile"
            element={<Profile />} />

          <Route path="/UserPage"
            element={<UsersContainer />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
