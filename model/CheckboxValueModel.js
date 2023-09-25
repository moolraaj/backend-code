 
const mongoose = require('mongoose');

const checkBoxSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  subjects: [String],
});

module.exports = mongoose.model('checkboxes', checkBoxSchema);
