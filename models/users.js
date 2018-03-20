var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  real_name: String,
  birth_date: String,
  psw: String,
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
