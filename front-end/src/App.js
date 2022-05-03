import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={ <LoginPage /> } />
        <Route exact path="/" element={ <Navigate to="/login" /> } />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
