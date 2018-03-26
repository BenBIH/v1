var mongoose = require('mongoose');


var MessageSchema = new mongoose.Schema({
  name: String,
  usremail: String,
  number: String,
  message: String
}, {timestamps: true});
module.exports = mongoose.model('Message', MessageSchema);