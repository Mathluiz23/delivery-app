const { user } = require('../../database/models');

const usersModel = {
  findByEmail: async (email) => {
    const response = await user.findOne({ where: { email } });
    
    return response;
  },
};

module.exports = usersModel;
