const salesErrors = require('../errors/salesErrors');
const salesModel = require('../models/salesModel');

const salesService = {
  read: async () => {
    const allSales = await salesModel.getAll();

    if (!allSales) {
      return { message: salesErrors.serverError };
    }

    return allSales;
  },
};

module.exports = salesService;
