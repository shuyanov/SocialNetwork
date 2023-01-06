import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
