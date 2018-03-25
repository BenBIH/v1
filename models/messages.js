var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: String,
  usremail: String,
  number: String,
  message: String
}, {timestamps: true});
module.exports = mongoose.model('Message', MessageSchema);