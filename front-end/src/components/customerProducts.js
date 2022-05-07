import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [userName, setUsername] = useState('');
  const [productsQuantity, setProductsQuantity] = useState({});
  const [cartProducts, setCartProducts] = useState({});
  const navigate = useNavigate();
  const CART_WITH_NO_ITEMS = '0,00';

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

    const product = products.find((p) => p.name === name);

    const inputValue = document.getElementsByName(product.name)[1].value;

    switch (e.target.id) {
    case 'input-price':
      setProductsQuantity({ ...productsQuantity, [name]: Number(e.target.value) });
      setCartProducts(
        {
          ...cartProducts,
          [name]: Number(e.target.value) * Number(product.price),
        },
      );
      break;

    case 'button-price-plus':
      setProductsQuantity({
        ...productsQuantity,
        [name]: (productsQuantity[name] ? productsQuantity[name] += 1 : 1),
      });
      setCartProducts(
        {
          ...cartProducts,
          [name]: (Number(inputValue) * Number(product.price)) + Number(product.price),
        },
      );
      break;

    case 'button-price-less':
      setProductsQuantity({
        ...productsQuantity,
        [name]: (productsQuantity[name] ? productsQuantity[name] -= 1 : 0),
      });
      setCartProducts(
        {
          ...cartProducts,
          [name]: (Number(inputValue) * Number(product.price)) - Number(product.price),
        },
      );
      break;
    default:
      break;
    }
  };

  const getTotalPrice = () => {
    // Pega o valor total de cada item com sua respectiva quantidade
    const cart = Object.entries(cartProducts);

    let totalPrice = 0;

    // Soma todos no reduce e retorna para totalPrice
    totalPrice = cart.reduce((acc, currentProduct) => acc + currentProduct[1], 0);

    totalPrice = totalPrice.toFixed(2);

    return String(totalPrice).replace(/\./, ',');
  };

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
            name={ product.name }
            onClick={ handlePrice }
            id="button-price-less"
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            value={ productsQuantity[product.name] }
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
          >
            +
          </button>
        </div>
      )) }
      <button
        type="button"
        onClick={ moveToCheckout }
        data-testid="customer_products__button-cart"
        disabled={ getTotalPrice() === CART_WITH_NO_ITEMS }
      >
        Ver carrinho: R$
        <strong
          data-testid="customer_products__checkout-bottom-value"
        >
          { getTotalPrice() }
        </strong>
      </button>
    </div>
  );
}

export default CustomerProducts;
