const getTotalPrice = (cartProducts) => {
  // Pega o valor total de cada item com sua respectiva quantidade
  const cart = Object.entries(cartProducts);

  let totalPrice = 0;

  // Soma todos no reduce e retorna para totalPrice
  totalPrice = cart.reduce((acc, currentProduct) => acc + currentProduct[1], 0);

  totalPrice = totalPrice.toFixed(2);

  return String(totalPrice).replace(/\./, ',');
};

export default getTotalPrice;
