const { Router } = require('express');
const loginRouter = require('./loginRoute');
const registerRouter = require('./registerRoute');

const router = Router();

router.use(loginRouter);
router.use(registerRouter);

module.exports = router;
