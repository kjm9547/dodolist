import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './pages/main/Main';
import { Route, Routes } from 'react-router-dom';
import { LandingView } from './pages/landing/LandingView';
import { RootRoutes } from './routes/RootRoutes';

function App() {
  return (
   <RootRoutes/>
  );
}

export default App;
