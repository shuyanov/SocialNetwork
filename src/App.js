import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';


import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import DialogContainer from './components/Dialog/NewDialog/DialogContainer';
import UsersContainer from './components/Users/UserConteiner';
import ProfileContainerofile from './components/Profile/ProfileContainer';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs"
              element={<DialogContainer />} />

            <Route path="/profile"
            element={<ProfileContainerofile />} />

            <Route path="/UserPage"
              element={<UsersContainer />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
