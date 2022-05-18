import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBarCustomer from '../customer/navBarCustomer';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      setSales(response.data);
    };

    fetchData();
  });

  return (
    <div>
      <NavBarCustomer />
      <section>
        { sales.map((sale, index) => (
          <div key={ index }>
            <div
              data-testid={ `seller_orders__element-order-id-${sale.id}` }
            >
              Pedido
              { sale.id }
            </div>
            <div
              data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
            >
              { sale.status }
            </div>
            <div
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            >
              { sale.saleDate }
            </div>
            <div
              data-testid={ `seller_orders__element-card-price-${sale.id}` }
            >
              { sale.price }
            </div>
            <div
              data-testid={ `seller_orders__element-card-address-${sale.id}` }
            >
              { sale.deliveryAddress }
            </div>
          </div>
        )) }
      </section>
    </div>
  );
}

export default SellerOrders;
