const jwt = require('jsonwebtoken');
const fs = require('fs');

const auth = (email) => {
  const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return token;
};

module.exports = auth;
