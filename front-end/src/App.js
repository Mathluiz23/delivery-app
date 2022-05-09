import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CustomerCheckoutPage from './pages/customerCheckoutPage';
import CustomerProductsPage from './pages/customerProductsPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/register';

export default function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterPage /> } />
      <Route exact path="/customer/products" element={ <CustomerProductsPage /> } />
      <Route exact path="/customer/checkout" element={ <CustomerCheckoutPage /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}
