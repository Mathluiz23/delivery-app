const { sale, salesProduct } = require('../../database/models');

const customerOrdersModel = {
  create: async (userId, sellerId, payload) => {
      const newSale = await sale.create({
        userId,
        sellerId,
        totalPrice: payload.totalPrice,
        deliveryAddress: payload.deliveryAddress,
        deliveryNumber: payload.deliveryNumber,
        saleDate: payload.saleDate,
        status: payload.status,
      });

      return newSale;
  },

  createSaleProduct: async (saleId, productId, quantity) => {
    await salesProduct.create({ saleId, productId, quantity });
  },
};

module.exports = customerOrdersModel;
