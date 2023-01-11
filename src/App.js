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
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
             <Route path="/dialogs" element={<Dialogs DialogsData={props.DialogsData} MassagData={props.MassagData} />} />
              <Route path="/profile" element={<Profile postData = {props.postData}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
