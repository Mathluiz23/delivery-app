import React, { useEffect } from 'react';
import axios from 'axios';

function CustomerOrders() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/customer/orders');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch http://localhost:3001/customer/orders');
      }
    };

    fetchData();
  }, [])

  return (
    <div>
      Pedidos
    </div>
  );
}

export default CustomerOrders;
