import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

const Provider = ({ children }) => {
  const [userName, setUsername] = useState('');
  const [products, setProducts] = useState([]);
  const [productsQuantity, setProductsQuantity] = useState({});
  const [productsId, setProductsId] = useState({});
  const [cartProducts, setCartProducts] = useState({});
  const [sellers, setSellers] = useState([]);

  const contextValue = {
    userName,
    setUsername,
    products,
    setProducts,
    productsQuantity,
    setProductsQuantity,
    cartProducts,
    setCartProducts,
    sellers,
    setSellers,
    productsId,
    setProductsId,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

// definição do PropTypes de children retirado deste site:
// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
