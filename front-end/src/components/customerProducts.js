import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

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
            Nome
          </li>
          <li
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </li>
        </ul>
      </nav>
      { products.map((product) => (
        <div
          key={ product.id }
        >
          <h3
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            { product.price }
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
