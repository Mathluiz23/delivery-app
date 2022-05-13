const { Op } = require('sequelize');
const { user } = require('../../database/models');

const usersModel = {
  getUser: async (email, password) => {
    const response = await user.findOne({ where: { email, password } });
    
    return response;
  },

  getUserIdByName: async (name) => {
    const response = await user.findOne({ where: { name } });

    return response.id;
  },

  getUserByNameAndEmail: async (name, email) => {
    // busca no banco um usuário que bate com o nome OU com o email
    // passados por parâmetro
    const response = await user.findOne({
      where: {
        [Op.or]: [{ name }, { email }],
      },
    });

    return response;
  },

  getAllSellers: async () => {
    const sellers = await user.findAll({
      where: { role: 'seller' },
      attributes: { exclude: ['id', 'email', 'password', 'role'] },
    });

    return sellers;
  },

  create: async (name, email, password) => {
    const newUser = await user.create({ name, email, password, role: 'customer' });

    return newUser;
  },
};

module.exports = usersModel;
