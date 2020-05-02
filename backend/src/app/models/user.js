const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserScheema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model('User', UserScheema);

module.exports = User;
