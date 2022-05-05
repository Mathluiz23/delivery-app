const md5 = require('md5');

const encryptPassword = (password) => md5(password);

module.exports = encryptPassword;
