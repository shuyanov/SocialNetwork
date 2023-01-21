import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import './index'

import {Routes, Route } from "react-router-dom";
import Massag from './components/Dialog/Massag';



const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.state.DialogElements} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs"
            element={<Massag
              dispatch={props.dispatch}
              state={props.state.DialogElements}
            />} />

          <Route path="/profile"
            element={<Profile
              dispatch={props.dispatch}
              profilePage={props.state.PostsElements}
            />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
