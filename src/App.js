import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialog/Dialog';
import './index'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlexContainer from './Common/FlexContainer/FlexContainer';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs state={props.steam.DialogElements} />} />
            <Route path="/profile" element={<Profile state={props.steam.PostsElements} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
