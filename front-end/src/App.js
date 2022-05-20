import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/adminPage';
import CustomerCheckoutPage from './pages/customerCheckoutPage';
import CustomerOrderDetails from './pages/customerOrderDetails';
import CustomerOrdersPage from './pages/customerOrdersPage';
import CustomerProductsPage from './pages/customerProductsPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/register';
import SellerOrdersPage from './pages/sellerOrdersPage';

export default function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <RegisterPage /> } />
      <Route exact path="/seller/orders" element={ <SellerOrdersPage /> } />
      <Route exact path="/customer/products" element={ <CustomerProductsPage /> } />
      <Route exact path="/customer/checkout" element={ <CustomerCheckoutPage /> } />
      <Route exact path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
      <Route exact path="/customer/orders" element={ <CustomerOrdersPage /> } />
      <Route path="/admin/manage" element={ <AdminPage /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}
