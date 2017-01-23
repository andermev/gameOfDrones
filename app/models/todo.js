var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
  name: String,
  number: Number
});