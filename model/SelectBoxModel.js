const mongoose = require('mongoose');

const checkBoxSchema = new mongoose.Schema({
  name:String,
  gender:String
});

module.exports = mongoose.model('selectboxes', checkBoxSchema);