import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

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

  return (
    <div>
      { orders.map((order, index) => (
        <div key={ index }>
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
            { order.saleDate }
          </h3>
          <h3>{ order.totalPrice }</h3>
        </div>
      )) }
    </div>
  );
}

export default CustomerOrders;
