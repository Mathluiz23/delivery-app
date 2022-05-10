const { sale } = require('../../database/models');

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
};

module.exports = customerOrdersModel;
