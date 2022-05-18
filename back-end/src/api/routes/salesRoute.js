const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = Router();

salesRouter.get('/sales', salesController.read);

module.exports = salesRouter;
