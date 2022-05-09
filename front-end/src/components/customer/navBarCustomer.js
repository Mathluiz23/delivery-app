import React from 'react';

function NavBarCustomer (props) {
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
            {props.userName}
          </li>
        </ul>
        <button
          className="button-go-out"
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ props.logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default NavBarCustomer;
