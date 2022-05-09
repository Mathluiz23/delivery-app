import React, { useContext } from 'react';
import MyContext from '../../contexts/myContext';
import NavBarCustomer from './navBarCustomer';

function CustomerCheckout() {
  const { userName, logout } = useContext(MyContext);

  return (
    <div>
      <NavBarCustomer />
    </div>
  );
};

export default CustomerCheckout;
