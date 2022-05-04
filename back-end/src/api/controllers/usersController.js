const encryptPassword = require('../helpers/encryptPassword');
const StatusCode = require('../helpers/StatusCode');
const UsersService = require('../services/usersServices');

const usersController = {
  getUser: async (req, res) => {
    const { email } = req.body;
    const password = encryptPassword(req.body.password);

    const response = await UsersService.getUser(email, password);
  
    if (response.message) {
      return res.status(StatusCode.NotFound).json(response);
    }
  
    return res.status(StatusCode.OK).json();
  },
};

module.exports = usersController;
