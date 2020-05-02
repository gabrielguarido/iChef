const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth.json');

const User = require('../../app/models/User');

const router = express.Router();

/**
 * Generates JWT Auth Token
 * @param {*} params 
 */
function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

/**
 * Register a new User
 */
router.post('/register', async (request, response) => {
  const { email } = request.body;

  try {
    if (await User.findOne({ email }))
      return response.status(400).send({ error: 'User already exists' });

    const user = await User.create(request.body);

    // Setting password as 'undefined' so it won't be returned to the user
    user.password = undefined;

    return response.send({
      user,
      token: generateToken({ id: user.id }),
    });
  } catch {
    return response.status(400).send({ error: 'Registration failed' });
  }
});

/**
 * Authenticate User's credentials - Login
 */
router.post('/authenticate', async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email }).select('+password');

  if (!user)
    return response.status(400).send({ error: 'User not found' });

  if (!await bcrypt.compare(password, user.password))
    return response.status(400).send({ error: 'Invalid password' });

  // Setting password as 'undefined' so it won't be returned to the user
  user.password = undefined;

  response.send({
    user,
    token: generateToken({ id: user.id }),
  });
})

module.exports = app => app.use('/auth', router);
