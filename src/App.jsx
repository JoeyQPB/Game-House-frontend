import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.jsx';
import SuggestNewGame from './pages/SuggestNewGame.jsx'
import SignInPage from './pages/SignInPage.jsx'
import LoginPage from './pages/logIn.jsx'
import ProfilePage from './pages/profile.jsx'
import DonatePage from "./pages/Donate.jsx";

function App() {
  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/donate' element={<DonatePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/suggestNewGame' element={<SuggestNewGame />} />
        </Routes>
      </div>
    </>
  )
}



export default App
