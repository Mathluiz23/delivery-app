const { Router } = require('express');
const usersController = require('../controllers/usersController');
const tokenValidation = require('../middlewares/tokenValidation');

const adminRouter = Router();

adminRouter.post('/users/admin', tokenValidation, usersController.adminCreate);

module.exports = adminRouter;
