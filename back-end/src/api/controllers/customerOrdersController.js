const StatusCode = require('../helpers/StatusCode');
const customerOrdersService = require('../services/customerOrdersService');

const customerOrdersController = {
  createOrder: async (req, res) => {
    // userName, sellerName, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, salesProductsData -> vem no req.body

    const salesResponse = await customerOrdersService.create(req.body);

    if (salesResponse.message) {
      return res.status(StatusCode.BadRequest).json(salesResponse);
    }

    await customerOrdersService
      .createSaleProduct(salesResponse.id, req.body.salesProductsData);
      
    return res.status(StatusCode.Created).json(salesResponse.id);
  },
};

module.exports = customerOrdersController;
