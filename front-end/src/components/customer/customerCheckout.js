import React from 'react';
import NavBarCustomer from './navBarCustomer';
import MyContext from '../../contexts/myContext';
import getTotalPrice from '../../helpers/getTotalPrice';

function CustomerCheckout() {
  const {
    productsQuantity,
    setProductsQuantity,
    cartProducts,
    setCartProducts,
  } = useContext(MyContext); 

  // subtotal -> nome e subtotal
  const subtotal = Object.entries(cartProducts);
  const quantity = Object.entries(productsQuantity);

  return (
    <div>
      { subtotal.map((item, index) => (
        <div>
          <h4>{ index }</h4>
          <h4>Product ID</h4>
          <h4>{ item[0] }</h4>
          <h4>{ quantity[index][1] }</h4>
          <h4>R$:{ (item[1] / quantity[index][1]).toFixed(2) }</h4>
          <h4>R$:{ item[1] }</h4>
          <button type="button">Remover</button>
        </div>
      ))}
      <h3 data-testid="customer_checkout__element-order-total-price">
        Total: R${ getTotalPrice(cartProducts) }
      </h3>
      <NavBarCustomer />
      <h3>Finalizar pedido</h3>
      <h3>Detalhes e endereço para entrega</h3>
    </div>
  );
}

export default CustomerCheckout;
