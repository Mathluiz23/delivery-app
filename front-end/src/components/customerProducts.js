import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [userName, setUsername] = useState('');
  const navigate = useNavigate();

  const getUserFromLocalStorage = () => {
    const objLocalStorage = localStorage.getItem('user');

    setUsername(JSON.parse(objLocalStorage).name);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/customer/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch http://localhost:3001/customer/products');
      }
    };

    fetchData();
    getUserFromLocalStorage();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </li>
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus pedidos
          </li>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userName}
          </li>
        </ul>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </nav>
      { products.map((product) => (
        <div
          key={ product.id }
        >
          <h3
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            { product.price.replace(/\./, ',') }
          </h3>
          <img
            alt="imagem do produto"
            src={ product.url_image }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <h4
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </h4>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            value={ 0 }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      )) }
    </div>
  );
}

export default CustomerProducts;
