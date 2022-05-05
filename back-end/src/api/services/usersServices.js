const UsersModel = require('../models/usersModel');
const LoginErrors = require('../errors/loginErrors');

const usersService = {
  getUser: async (email, password) => {
    const user = await UsersModel.getUser(email, password);

    if (!user) {
      return { message: LoginErrors.invalidCredentials };
    }
  
    return user;
  },
};

module.exports = usersService;