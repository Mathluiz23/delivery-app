const { Router } = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const customerOrdersController = require('../controllers/customerOrdersController');

const orderDetails = Router();

orderDetails.post('/customer/orders', tokenValidation, customerOrdersController.createOrder);

module.exports = orderDetails;
