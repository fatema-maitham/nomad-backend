const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

userSchema.set('toJSON', {
  transform: (document, userObj) => {
    delete userObj.password;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;