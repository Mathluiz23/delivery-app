const { Router } = require('express');
const customerProductsController = require('../controllers/customerProductsController');

const customerProductsRouter = Router();

customerProductsRouter.get('/customer/products', customerProductsController.getAll);

module.exports = customerProductsRouter;
