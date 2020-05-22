const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');

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
 * Registers a new User
 */
router.post('/register', async (request, response) => {
  const {email} = request.body;

  try {
    if (await User.findOne({email})) {
      return response.status(400).send({error: 'User already exists'});
    }

    const user = await User.create(request.body);

    // Setting password as 'undefined' so it won't be returned to the user
    user.password = undefined;

    return response.send({
      user,
      token: generateToken({id: user.id}),
    });
  } catch {
    return response.status(400).send({error: 'Registration failed'});
  }
});

/**
 * Authenticates User's credentials - Login
 */
router.post('/authenticate', async (request, response) => {
  const {email, password} = request.body;

  const user = await User.findOne({email}).select('+password');

  if (!user) {
    return response.status(400).send({error: 'User not found'});
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return response.status(400).send({error: 'Invalid password'});
  }

  // Setting password as 'undefined' so it won't be returned to the user
  user.password = undefined;

  response.send({
    user,
    token: generateToken({id: user.id}),
  });
});

/**
 * Sends an e-mail for the user who forgot the password
 */
router.post('/forgot', async (request, response) => {
  const {email} = request.body;

  try {
    const user = await User.findOne({email});

    if (!user) {
      return response.status(400).send({error: 'User not found'});
    }

    const token = crypto.randomBytes(20).toString('hex');

    const now = new Date();
    now.setHours(now.getHours() + 1);

    await User.findByIdAndUpdate(user.id, {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
    });

    mailer.sendMail(
      {
        to: email,
        from: 'password.recovery@ichef.com.br',
        template: 'auth/forgot_password',
        context: {token},
      },
      (err) => {
        if (err) {
          return response
            .status(400)
            .send({error: 'Error while recovering password'});
        }

        return response.send({message: 'E-mail sent successfully'});
      },
    );
  } catch (err) {
    return response.status(400).send({error: 'Failed to recover password'});
  }
});

/**
 * Resets user's password
 */
router.post('/reset', async (request, response) => {
  const {email, token, password} = request.body;

  try {
    const user = await User.findOne({email}).select(
      '+passwordResetToken passwordResetExpires',
    );

    if (!user) {
      return response.status(400).send({error: 'User not found'});
    }

    if (token !== user.passwordResetToken) {
      return response.status(400).send({error: 'Invalid token'});
    }

    const now = new Date();

    if (now > user.passwordResetExpires) {
      return response
        .status(400)
        .send({error: 'Token expired, generate a new one'});
    }

    user.password = password;

    await user.save();

    return response.send();
  } catch (err) {
    return response.status(400).send({error: 'Could not reset password'});
  }
});

module.exports = (app) => app.use('/auth', router);
