const { Router } = require('express');
const customerProductsRouter = require('./customerProductsRoute');
const loginRouter = require('./loginRoute');
const orderDetails = require('./orderDetails');
const registerRouter = require('./registerRoute');
const sellersRouter = require('./sellers');

const router = Router();

router.use(loginRouter);
router.use(registerRouter);

router.use(customerProductsRouter);
router.use(orderDetails);
router.use(sellersRouter);

module.exports = router;
