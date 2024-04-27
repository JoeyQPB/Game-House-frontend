import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.jsx';
import SuggestNewGame from './pages/SuggestNewGame.jsx'
import SignIn from './pages/SignIn.jsx'

function App() {


  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SuggestNewGame' element={<SuggestNewGame />} />
        </Routes>
      </div>
    </>
  )
}



export default App
