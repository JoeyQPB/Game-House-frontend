import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.jsx';
import SugestaoJogo from './pages/sugestaoJogo.jsx'

function App() {


  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sugestoes_form' element={<SugestaoJogo />} />
        </Routes>
      </div>
    </>
  )
}



export default App
