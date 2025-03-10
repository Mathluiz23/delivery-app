import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBarCustomer from './navBarCustomer';
import MyContext from '../../contexts/myContext';
import getTotalPrice from '../../helpers/getTotalPrice';

function CustomerCheckout() {
  const FIRST_SELLER = 'Fulana Pereira';

  const [selectValue, setSelectValue] = useState(FIRST_SELLER);
  const [cart, setCart] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const {
    products,
    productsQuantity,
    cartProducts,
    sellers,
    productsId,
  } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    // cart -> nome e subtotal
    setCart(Object.entries(cartProducts));
  }, []);

  const deleteItem = (_e, cartParameter, position) => {
    const total = document.getElementsByTagName('h3')[0];

    delete cartProducts[position];
    delete productsQuantity[position];
    delete productsId[position];

    const newCart = cartParameter.filter((product) => product[0] !== position);

    setCart(newCart);
    total.innerText = `Total: R$${getTotalPrice(newCart)}`;
  };

  const getIdAndQuantity = (objProductsId, objProductsQuantity) => {
    const array = [];

    const ids = Object.values(objProductsId);

    const quantities = Object.values(objProductsQuantity);

    for (let i = 0; i < ids.length; i += 1) {
      array.push([ids[i], quantities[i]]);
    }

    return array;
  };

  const { token } = JSON.parse(localStorage.getItem('user'));

  const orderCheckout = async () => {
    if (!deliveryAddress || !deliveryNumber) {
      alert('Por favor, preencha o endereço e o número.');
      return;
    }
    
    const salesProductsData = getIdAndQuantity(productsId, productsQuantity);
    const payload = {
      userName: JSON.parse(localStorage.getItem('user')).name,
      sellerName: FIRST_SELLER,
      totalPrice: Number(getTotalPrice(cartProducts).replace(/,/, '.')),
      deliveryAddress,
      deliveryNumber,
      saleDate: Date.now(),
      status: 'Pendente',
      salesProductsData,
    };
  
    const response = await axios.post(
      'http://localhost:3001/customer/orders',
      payload,
      { headers: { authorization: token } },
    );
  
    const id = response.data;
    navigate(`/customer/orders/${id}`);
  };

  // quantity -> nome e quantidade
  const quantity = Object.entries(productsQuantity);

  return (
    <div id="all-items">
      <NavBarCustomer />
      { cart.map((item, index) => {
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
              onClick={ (e) => deleteItem(e, cart, product.name) }
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
          onChange={ (e) => setSelectValue(e.target.value) }
          value={ selectValue }
        >
          { sellers
            .map((seller, index) => (
              <option key={ index } value={ seller.name }>
                { seller.name }
              </option>
            )) }
        </select>
        <input
          type="text"
          data-testid="customer_checkout__input-address"
          onChange={ (e) => setDeliveryAddress(e.target.value) }
        />
        <input
          type="text"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ (e) => setDeliveryNumber(e.target.value) }
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
