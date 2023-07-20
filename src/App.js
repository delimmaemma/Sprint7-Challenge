import React, { useState, useEffect } from 'react'
import {Routes, Route, Link } from 'react-router-dom'

import BloomTech from './images/bloomtech-logo-2.png'

import Home from './components/Home'
import Help from './components/Help'
import Pizza from './components/Pizza'

import './App.css'

const App = () => {
  return (
    <header className='App-header'>
      <nav className='container header'>
        <p className='title'><img src = {BloomTech} className='logo'></img>&nbsp;&nbsp;BloomTech Eats</p>
        <Link to='help' className='button'>Help</Link>
        <Link to='/' className='button'>Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='help' element={<Help />} />
        <Route path='pizza' element={<Pizza />} />
      </Routes>
    </header>
  );
};
export default App;
