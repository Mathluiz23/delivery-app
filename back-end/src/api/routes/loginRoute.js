const { Router } = require('express');
const UsersController = require('../controllers/usersController');

const loginRouter = Router();

loginRouter.post('/login', UsersController.getUser);

module.exports = loginRouter;
