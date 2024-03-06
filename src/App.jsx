import React from 'react';
import './App.css';
import './nav/style.css';
import NavBar from './nav/NavBar';
import Home from './nav/Home';
import About from './nav/About';
import { Routes, Route } from 'react-router-dom';
import RedirectCompo from './nav/RedirectCompo';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/dashboard/:name' element={<RedirectCompo />} />
      </Routes>
    </div>
  );
}

export default App;
