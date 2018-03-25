var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  real_name: {
    type: String,
    required: true,
    trim: true
  },
  birth_date: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
}, {timestamps: true}); 

module.exports = mongoose.model('User', UserSchema);
