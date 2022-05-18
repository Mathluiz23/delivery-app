const StatusCode = require('../helpers/StatusCode');
const salesService = require('../services/salesService');
const salesErrors = require('../errors/salesErrors');

const salesController = {
  read: async (_req, res) => {
    const response = salesService.read();

    if (response.message) {
      return res.status(StatusCode.InternalServerError).json(salesErrors.serverError);
    }

    return res.status(StatusCode.OK).json(response);
  },
};

module.exports = salesController;
