const { product } = require('../../database/models');

const customerProductsModel = {
  getAll: async () => {
    const response = await product.findAll();

    return response;
  },
};

module.exports = customerProductsModel;
