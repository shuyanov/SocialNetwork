import React from 'react';
import Profile from './components/Profile/Profile';
import Header from './components/Cells/Header/Header';
import Dialogs from './components/Dialog/Dialog';
import './App.css';
import './index'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlexContainer from './Common/FlexContainer/FlexContainer';
import { LayOut } from './Common/LayOut/LayOut';
import { NavBar } from './components/Cells/NavBar/NavBar';
import { HomePage } from './components/Pages/HomePage/HomPage';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <LayOut.Header>
          <Header />
        </LayOut.Header>
        <LayOut.Body>
          <HomePage />
        </LayOut.Body>
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <div className="app-wrapper">
    //     <NavBar />
    //     <Header />
    //     <div className='app-wrapper-content'>
    //       <Routes>
    //         <Route path="/dialogs" element={<Dialogs state={props.steam.DialogElements} />} />
    //         <Route path="/profile" element={<Profile state={props.steam.PostsElements} />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
