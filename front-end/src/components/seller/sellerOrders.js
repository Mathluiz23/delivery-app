import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBarCustomer from '../customer/navBarCustomer';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/sales');
      setSales(response.data);
    };

    fetchData();
  });

  const redirect = (saleId) => {
    navigate(`/seller/orders/${saleId}`);
  };

  return (
    <div>
      <NavBarCustomer />
      <section>
        { sales.map((sale, index) => (
          <div
            onClick={ () => redirect(sale.id) }
            key={ index }
            onKeyPress={ () => redirect(sale.id) }
            role="button"
            tabIndex="0"
          >
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
