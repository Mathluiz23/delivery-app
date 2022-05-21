const jwt = require('jsonwebtoken');
const fs = require('fs');
const StatusCode = require('../helpers/StatusCode');
const LoginErrors = require('../errors/loginErrors');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(StatusCode.Unauthorized).json({ message: LoginErrors.invalidToken });
  } 

  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(StatusCode.Unauthorized).json({ message: LoginErrors.invalidToken });
  }
};

module.exports = tokenValidation;
