const UsersModel = require('../models/usersModel');
const LoginErrors = require('../errors/loginErrors');

const usersService = {
  findByEmail: async (email) => {
    const user = await UsersModel.findByEmail(email);

    if (!user) {
      return { message: LoginErrors.invalidEmail };
    }
  
    return user;
  },
};

module.exports = usersService;