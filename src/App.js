import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialog from './components/Dialog/Dialog';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Dialog />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
