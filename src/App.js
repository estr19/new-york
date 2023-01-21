import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Phish from './Phish';
import USOpen from './USOpen';
import Avid from './Avid';
import Svid from './Svid';

function App() {
  return (
    <div>
      <Router>
        <nav className='top'>
          <Link to='/' className='link' >April Pics</Link>
          <Link to='/avid' className='link' >April Videos</Link>
          <Link to='/usopen' className='link' >September Pics</Link>
          <Link to='/svid' className='link' >September Videos</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Phish />}></Route>
          <Route path='/avid' element={<Avid />}></Route>
          <Route path='/usopen' element={<USOpen />}></Route>
          <Route path='/svid' element={<Svid />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
