const UsersModel = require('../models/usersModel');
const LoginErrors = require('../errors/loginErrors');
const RegisterErrors = require('../errors/registerErrors');
const auth = require('../helpers/auth');

const usersService = {
  getUser: async (email, password) => {
    const user = await UsersModel.getUser(email, password);
    const token = auth(email);

    if (!user) {
      return { message: LoginErrors.invalidCredentials };
    }
  
    return { ...user.dataValues, token };
  },

  getAllSellers: async () => {
    const sellers = await UsersModel.getAllSellers();

    if (!sellers) {
      return { message: LoginErrors.badRequest };
    }

    return sellers;
  },

  create: async (name, email, password) => {
    const userExists = await UsersModel.getUserByNameAndEmail(name, email);

    if (userExists) {
      return { message: RegisterErrors.alreadyExists };
    }

    const newUser = await UsersModel.create(name, email, password);

    return newUser;
  },

  adminCreate: async (name, email, password, role) => {
    const userExists = await UsersModel.getUserByNameAndEmail(name, email);

    if (userExists) {
      return { message: RegisterErrors.alreadyExists };
    }

    const newUser = await UsersModel.adminCreate(name, email, password, role);

    return newUser;
  },
};

module.exports = usersService;
