import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './pages/main/Main';
import { Route, Routes } from 'react-router-dom';
import { LandingView } from './pages/landing/LandingView';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingView/>}/>
      <Route path='/main' element={<Main/>}/>
    
    </Routes>
  );
}

export default App;
