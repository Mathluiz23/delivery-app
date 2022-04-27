import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
