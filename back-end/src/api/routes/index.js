const { Router } = require('express');
const customerProductsRouter = require('./customerProductsRoute');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRoute');

const router = Router();

router.use(loginRouter);
router.use(registerRouter);
router.use(customerProductsRouter);

module.exports = router;
