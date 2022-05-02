const StatusCode = require('../helpers/StatusCode');
const UsersService = require('../services/usersServices');

const usersController = {
  getUser: async (req, res) => {
    const { email } = req.body;

    const response = await UsersService.findByEmail(email);
  
    if (response.message) {
      return res.status(StatusCode.NotFound).json(response);
    }
  
    return res.status(StatusCode.OK).json();
  },
};

module.exports = usersController;
