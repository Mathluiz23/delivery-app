import React from 'react';
import CustomerOrders from '../components/customer/customerOrders';
import NavBarCustomer from '../components/customer/navBarCustomer';

function CustomerOrdersPage() {
  return(
    <>
      <NavBarCustomer />
      <CustomerOrders />
    </>
  );
}

export default CustomerOrdersPage;
