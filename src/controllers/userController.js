const userService = require('../services/userService');

const register = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const token = await userService.loginUser(req.body);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
