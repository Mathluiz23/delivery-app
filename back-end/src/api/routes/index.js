const { Router } = require('express');
const customerProductsRouter = require('./customerProductsRoute');
const loginRouter = require('./loginRoute');
const orderDetails = require('./orderDetails');
const registerRouter = require('./registerRoute');
const salesRouter = require('./salesRoute');
const sellersRouter = require('./sellers');

const router = Router();

router.use(loginRouter);
router.use(registerRouter);

router.use(customerProductsRouter);
router.use(orderDetails);
router.use(sellersRouter);
router.use(salesRouter);

module.exports = router;
