const jwt = require('jsonwebtoken');

const User = require('../models/User');

// get user by jwt token
const getUserByToken = async (token) => {
  if (!token) {
    return resizeBy.status(401).json({ message: 'Acesso Negado!' });
  }

  const decoded = jwt.verify(token, 'nossosecret');

  const userId = decoded.id;

  const user = await User.findById(userId);

  return user;
};

module.exports = getUserByToken;
