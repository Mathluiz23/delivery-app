const { Router } = require('express');
const usersController = require('../controllers/usersController');
const tokenValidation = require('../middlewares/tokenValidation');

const adminRouter = Router();

adminRouter.post('/admin', tokenValidation, usersController.create);

module.exports = adminRouter;
