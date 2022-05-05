const UsersModel = require('../models/usersModel');
const LoginErrors = require('../errors/loginErrors');
const RegisterErrors = require('../errors/registerErrors');

const usersService = {
  getUser: async (email, password) => {
    const user = await UsersModel.getUser(email, password);

    if (!user) {
      return { message: LoginErrors.invalidCredentials };
    }
  
    return user;
  },

  create: async (name, email, password) => {
    const userExists = await UsersModel.getUserByNameAndEmail(name, email);

    if (userExists) {
      return { message: RegisterErrors.alreadyExists };
    }

    const newUser = await UsersModel.create(name, email, password);

    return newUser;
  },
};

module.exports = usersService;