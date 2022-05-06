const StatusCode = require('../helpers/StatusCode');
const customerProductsService = require('../services/customerProductsService');

const customerProductsController = {
  getAll: async (_req, res) => {
    const response = await customerProductsService.getAll();

    if (response.message) {
      return res.status(StatusCode.InternalServerError).json(response);
    }

    return res.status(StatusCode.OK).json(response);
  },
};

module.exports = customerProductsController;
