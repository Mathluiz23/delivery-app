import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sales');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch http://localhost:3001/sales');
      }
    };

    fetchData();
  }, []);

  const convertDate = (utcDate) => {
    // Converte data UTC em data dd/mm/aaaa

    const splitdata = utcDate.split('-' || 'T');

    const convertedData = `${`${splitdata[2]
      .split('T')[0]}/${splitdata[1]}/${splitdata[0]}`}`;

    return convertedData;
  };

  const redirect = (saleId) => {
    navigate(`/customer/orders/${saleId}`);
  };

  return (
    <div>
      { orders.map((order, index) => (
        <div
          key={ index }
          onClick={ () => redirect(order.id) }
          onKeyPress={ () => redirect(order.id) }
          role="button"
          tabIndex="0"
        >
          <h3
            data-testid={ `customer_orders__element-order-id-${order.id}` }
          >
            { order.id }
          </h3>
          <h3
            data-testid={ `customer_orders__element-delivery-status-${order.id}` }
          >
            { order.status }
          </h3>
          <h3
            data-testid={ `customer_orders__element-order-date-${order.id}` }
          >
            { convertDate(order.saleDate) }
          </h3>
          <h3
            data-testid={ `customer_orders__element-card-price-${order.id}` }
          >
            { order.totalPrice.replace(/\./, ',') }
          </h3>
        </div>
      )) }
    </div>
  );
}

export default CustomerOrders;
