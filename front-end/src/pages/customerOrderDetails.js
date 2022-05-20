import React from 'react';
import CustomerOrderDetails from '../components/customer/customerOrderDetails';
import NavBarCustomer from '../components/customer/navBarCustomer';

function CustomerOrderDetailsPage() {
  return (
    <>
      <NavBarCustomer />
      <h1>Detalhes dos Pedidos</h1>
      <CustomerOrderDetails />
    </>
  );
}

export default CustomerOrderDetailsPage;
