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

  return (
    <div className="header-container">
      <ul>
        <li
          className="products-header"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </li>
        <li
          className="my-requests-header"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus pedidos
        </li>
      </ul>
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
