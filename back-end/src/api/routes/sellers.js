const { Router } = require('express');
const UsersController = require('../controllers/usersController');

const sellersRouter = Router();

sellersRouter.get('/sellers', UsersController.getAllSellers);

module.exports = sellersRouter;
