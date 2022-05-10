const { Router } = require('express');
const customerOrdersController = require('../controllers/customerOrdersController');

const orderDetails = Router();

orderDetails.post('/customer/orders', customerOrdersController.createOrder);

module.exports = orderDetails;
