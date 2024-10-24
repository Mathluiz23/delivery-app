import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import myContext from '../../contexts/myContext';
import getTotalPrice from '../../helpers/getTotalPrice';

function CustomerOrderDetails() {
  const [order, setOrder] = useState([]);
  const [saleDate, setSaleDate] = useState('');

  const { productsQuantity, cartProducts } = useContext(myContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sales');

        const orderDetails = response.data.find((item) => item.id === Number(id));

        const date = orderDetails.saleDate.split('-' || 'T');

        const convertedDate = `${`${date[2]
          .split('T')[0]}/${date[1]}/${date[0]}`}`;

        setSaleDate(convertedDate);

        setOrder(orderDetails);
      } catch (error) {
        console.error('Failed to fetch http://localhost:3001/sales');
      }
    };

    fetchData();
  }, [id]);

  const quantities = Object.entries(productsQuantity);

  const subtotal = Object.entries(cartProducts);

  return (
    <>
      <div data-testid="customer_order_details__element-order-details-label-order-id">
        { order.id }
      </div>

      <div data-testid="customer_order_details__element-order-details-label-seller-name">
        Fulana Pereira
      </div>

      <div data-testid="customer_order_details__element-order-details-label-order-date">
        { saleDate }
      </div>

      <div
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { order.status }
      </div>

      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={order.status !== 'Pendente'}
        onClick={ () => {
          // lógica para marcar como entregue
        }}
      >
        Marcar como Entregue
      </button>

      { quantities.map((product, index) => (
        <div key={ index }>
          <div
            data-testid={ `customer_order_details__element
              -order-table-item-number-${index}` }
          >
            { index + 1 }
          </div>
          <div
            data-testid={ `customer_order_details__element-order-table-name-${index}` }
          >
            { product[0] }
          </div>
          <div
            data-testid={ `customer_order_details__element
              -order-table-quantity-${index}` }
          >
            { product[1] }
          </div>
          <div
            data-testid={ `customer_order_details__element
              -order-table-sub-total-${index}` }
          >
            {/* valor unitário do produto */}
            { (subtotal[index][1] / product[1]).toFixed(2) }
          </div>
          <div
            data-testid={ `customer_order_details__element-order-total-price-${index}` }
          >
            {/* subtotal do produto */}
            { subtotal[index][1] }
          </div>
        </div>
      ))}

      <div
        data-testid="customer_order_details__element-order-total-price"
      >
        { getTotalPrice(cartProducts) }
      </div>
    </>
  );
}

export default CustomerOrderDetails;
