import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import LoginSignup from './pages/LoginSignup';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginSignup></LoginSignup>}></Route>
          <Route path='profile/*' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
