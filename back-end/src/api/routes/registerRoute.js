const { Router } = require('express');
const usersController = require('../controllers/usersController');

const registerRouter = Router();

registerRouter.post('/register', usersController.create);

module.exports = registerRouter;
