import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Phish from './Phish';
import USOpen from './USOpen';

function App() {
  return (
    <div>
      <Router>
        <nav className='top'>
          <Link to='/' className='link' >April</Link>
          <Link to='/usopen' className='link' >September</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Phish />}></Route>
          <Route path='/usopen' element={<USOpen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
