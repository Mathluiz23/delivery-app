const { Router } = require('express');
const customerProductsRouter = require('./customerProductsRoute');
const loginRouter = require('./loginRoute');
const orderDetails = require('./orderDetails');
const registerRouter = require('./registerRoute');

const router = Router();

router.use(loginRouter);
router.use(registerRouter);
router.use(customerProductsRouter);
router.use(orderDetails);

module.exports = router;
