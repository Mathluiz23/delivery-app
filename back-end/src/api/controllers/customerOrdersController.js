const StatusCode = require('../helpers/StatusCode');
const customerOrdersService = require('../services/customerOrdersService');

const customerOrdersController = {
  createOrder: async (req, res) => {
    // userName, sellerName, totalPrice, deliveryAddress, deliveryNumber, saleDate, status -> vem no req.body

    const response = await customerOrdersService.create(req.body);

    if (response.message) {
      return res.status(StatusCode.BadRequest).json(response);
    }

    return res.status(StatusCode.Created).json(response.id);
  },
};

module.exports = customerOrdersController;
