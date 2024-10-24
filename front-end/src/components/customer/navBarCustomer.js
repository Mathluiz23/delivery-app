import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../contexts/myContext';

function NavBarCustomer() {
  const { userName } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleButtonOrders = () => {
    navigate('/customer/orders');
  };

  return (
    <div className="header-container">
      <div className="button-header">
        <ul>
          <li
            className="products-header"
            data-testid="customer_products__element-navbar-link-products"
            onClick={() => {navigate('/customer/products')}}
          >
            Produtos
          </li>
        </ul>
        <button
          className="my-requests-header"
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ handleButtonOrders }
        >
          Meus pedidos
        </button>
      </div>
      <div className="client-and-button-header">
        <ul>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userName}
          </li>
        </ul>
        <button
          className="button-go-out"
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default NavBarCustomer;
