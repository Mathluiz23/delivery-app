const orderDetailsErrors = require('../errors/orderDetailsErrors');
const customerOrdersModel = require('../models/customerOrdersModel');
const usersModel = require('../models/usersModel');

const customerOrdersService = {
  create: async (payload) => {
    const userId = await usersModel.getUserIdByName(payload.userName);
    const sellerId = await usersModel.getUserIdByName(payload.sellerName);

    const response = await customerOrdersModel.create(userId, sellerId, payload);

    if (!response) {
      return { message: orderDetailsErrors.invalidCredentials };
    }

    return response;
  },
};

module.exports = customerOrdersService;
