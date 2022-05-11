import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBarCustomer from './navBarCustomer';
import MyContext from '../../contexts/myContext';
import getTotalPrice from '../../helpers/getTotalPrice';

function CustomerCheckout() {
  const [sellers, setSellers] = useState([]);
  const {
    products,
    productsQuantity,
    cartProducts,
    setCartProducts,
  } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sellers');
        setSellers(response.data);
      } catch (error) {
        console.error('Failed to fetch http://localhost:3001/sellers');
      }
    };

    fetchData();
  }, [cartProducts]);

  const deleteItem = (e, object, position) => {
    const total = document.getElementsByTagName('h3')[0];

    delete object[position];

    const item = document.getElementById('all-items');
    item.removeChild(e.target.parentNode);

    setCartProducts(object);
    total.innerText = `Total: R$${getTotalPrice(cartProducts)}`;
  };

  const token = JSON.parse(localStorage.getItem('token'));

  const orderCheckout = async () => {
    const payload = {
      userName: JSON.parse(localStorage.getItem('name')),
      sellerName: 'alguém',
      totalPrice: getTotalPrice(cartProducts),
      deliveryAddress: 'rua sla',
      deliveryNumber: 13,
      saleDate: Date.now(),
      status: 'pendente',
    };

    const response = await axios.post(
      'http://localhost:3001/customer/orders',
      { payload },
      { headers: { authorization: token } },
    );

    navigate(`/customer/orders/${response.id}`);
  };

  // subtotal -> nome e subtotal
  const subtotal = Object.entries(cartProducts);

  // quantity -> nome e quantidade
  const quantity = Object.entries(productsQuantity);

  return (
    <div id="all-items">
      <NavBarCustomer />
      { subtotal.map((item, index) => {
        const product = products.find((p) => p.name === item[0]);

        return (
          <div key={ index } style={ { padding: '30px' } }>
            <h4
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </h4>
            <h4
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              { product.name }
            </h4>
            <h4
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              { quantity[index][1] }
            </h4>
            <h4
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              R$:
              { product.price.replace(/\./, ',') }
            </h4>
            <h4
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              R$:
              { String(item[1].toFixed(2)).replace(/\./, ',') }
            </h4>
            <button
              type="button"
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              onClick={ (e) => deleteItem(e, cartProducts, product.name) }
            >
              Remover
            </button>
          </div>
        );
      })}
      <h3 data-testid="customer_checkout__element-order-total-price">
        Total: R$
        { getTotalPrice(cartProducts) }
      </h3>
      <h3>Detalhes e endereço para entrega</h3>
      <section>
        <select
          data-testid="customer_checkout__select-seller"
        >
          { sellers
            .map((seller, index) => <option key={ index }>{ seller.name }</option>) }
        </select>
        <input
          type="text"
          data-testid="customer_checkout__input-address"
        />
        <input
          type="text"
          data-testid="customer_checkout__input-addressNumber"
        />
      </section>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ orderCheckout }
      >
        Finalizar pedido
      </button>
    </div>
  );
}

export default CustomerCheckout;
