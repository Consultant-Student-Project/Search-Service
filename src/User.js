const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    }
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  authorization: {
    type: Number,
    default: 0
  },
  faculty: {
    type: String,
    default: 'n/a'
  },
  department: {
    type: String,
    default: 'n/a'
  }
});

const User = mongoose.model('User', userSchema);


module.exports = User;