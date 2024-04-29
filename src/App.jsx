import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.jsx';
import SuggestNewGame from './pages/SuggestNewGame.jsx'
import SignInPage from './pages/SignInPage.jsx'
import LoginPage from './pages/logIn.jsx'

function App() {


  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/suggestNewGame' element={<SuggestNewGame />} />
        </Routes>
      </div>
    </>
  )
}



export default App
