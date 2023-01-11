import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let postData = [
  { id: 1, write: "it's my first post", Like: 15 },
  { id: 2, write: "HI ;) it's my second post", Like: 18 },
  { id: 3, write: "it's my cat", Like: 182 },
  { id: 4, write: "FUCK YOU", Like: 182 }
]

let DialogsData = [
  { id: 1, user: "Max" },
  { id: 2, user: "CloneMax1" },
  { id: 3, user: "CloneMax2" },
  { id: 4, user: "CloneMax3" },
  { id: 5, user: "CloneMax4" }
]

let MassagData = [
  { id: 1, massag: "Hello" },
  { id: 2, massag: "How are you" },
  { id: 3, massag: "Yop" },
  { id: 4, massag: "Watsap" },
  { id: 5, massag: "you good look" }
]

root.render(
  <React.StrictMode>
    <App postData={postData} DialogsData={DialogsData} MassagData={MassagData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

