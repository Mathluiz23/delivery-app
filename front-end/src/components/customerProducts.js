import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/products.css';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [userName, setUsername] = useState('');
  const [productsPrice, setProductsPrice] = useState({});
  const navigate = useNavigate();

  const getUserFromLocalStorage = () => {
    const objLocalStorage = localStorage.getItem('user');

    setUsername(JSON.parse(objLocalStorage).name);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const moveToCheckout = () => {
    navigate('/customer/checkout');
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

  const handlePrice = (e) => {
    const { name } = e.target;

    switch (e.target.id) {
    case 'input-price':
      setProductsPrice({ ...productsPrice, [name]: Number(e.target.value) });
      break;

    case 'button-price-plus':
      setProductsPrice({
        ...productsPrice, [name]: (productsPrice[name] ? productsPrice[name] += 1 : 1),
      });
      break;

    case 'button-price-less':
      setProductsPrice({
        ...productsPrice, [name]: (productsPrice[name] ? productsPrice[name] -= 1 : 0),
      });
      break;
    default:
      break;
    }
  };

  return (
    <div>
      <div className="header-container">
      {/* <nav className="menu-header"> */}
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
      {/* </nav> */}
      <div className="page-products-container">
      { products.map((product) => (
        <div className="card-produtcs"
          key={ product.id }
        >
          <h2
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            { product.price.replace(/\./, ',') }
          </h2>
          <img
            alt="imagem do produto"
            src={ product.url_image }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <h3
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }
          </h3>
          <div className="quantity-produtc">
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              name={ product.name }
              onClick={ handlePrice }
              id="button-price-less"
              className="button-substr"
            >
              -
            </button>
            <input
              type="text"
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              value={ productsPrice[product.name] }
              defaultValue={ 0 }
              name={ product.name }
              onChange={ handlePrice }
              id="input-price"
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              name={ product.name }
              onClick={ handlePrice }
              id="button-price-plus"
              className="button-add"
            >
              +
            </button>
          </div>
        </div>
      )) }
        <div className="button-ver-carrinho ">
          <button
            type="button"
            onClick={ moveToCheckout }
            data-testid="customer_products__button-cart"
          >
            Ver carrinho: R$
            <strong
              data-testid="customer_products__checkout-bottom-value"
            >
              {`125,00`}
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerProducts;
