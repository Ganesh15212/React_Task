import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import UserData from './Component/UserData';
import Navbar from './Component/Navbar';
import EditUser from './Component/EditUser';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userData' element={<UserData />} />
          <Route path='/editUser/:id' element={<EditUser />} />

          {/* Wrong Path */}
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
