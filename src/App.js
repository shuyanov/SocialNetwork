import React from 'react';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialog/Dialog';
import './App.css';
import './index'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlexContainer from './Common/FlexContainer/FlexContainer';
import { LayOut } from './Common/LayOut/LayOut';

const App = (props) => {
  return (
    <div>
      <LayOut.Header>
        <Header />
      </LayOut.Header>
    </div>

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
