import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialog/Dialog';
import './index'

import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.steam.DialogElements} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs" element={<Dialogs state={props.steam.DialogElements} />} />
          <Route path="/profile" element={<Profile
              state={props.steam.PostsElements}
              dispatch={props.dispatch}
               />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
