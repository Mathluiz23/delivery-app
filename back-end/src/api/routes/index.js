const { Router } = require('express');
const loginRouter = require('./loginRoute');

const router = Router();

router.use(loginRouter);

module.exports = router;
