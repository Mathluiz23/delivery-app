const { user } = require('../../database/models');

const usersModel = {
  getUser: async (email, password) => {
    const response = await user.findOne({ where: { email, password } });
    
    return response;
  },
};

module.exports = usersModel;
