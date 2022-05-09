const customerProductsErrors = require('../errors/customerProductsErrors');
const customerProductsModel = require('../models/customerProductsModel');

const customerProductsService = {
  getAll: async () => {
    const response = await customerProductsModel.getAll();

    if (!response) {
      return { message: customerProductsErrors.serverError };
    }

    return response;
  },
};

module.exports = customerProductsService;
