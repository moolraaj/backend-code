 
const mongoose = require('mongoose');

const  imageSchema=new mongoose.Schema({
  imageName:String,
  imageUrl:String
})

module.exports = mongoose.model('images', imageSchema);
