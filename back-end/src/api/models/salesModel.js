const { sale } = require('../../database/models');

const salesModel = {
  getAll: async () => {
    const allSales = await sale.findAll();

    return allSales;
  },
};

module.exports = salesModel;
