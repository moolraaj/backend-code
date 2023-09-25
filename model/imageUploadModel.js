 
const mongoose = require('mongoose');

const checkBoxSchema = new mongoose.Schema({
    name: String,
    email: String,
    profileImage: {
      data: Buffer, // Store binary image data
      contentType: String, // MIME type of the image
    },})

module.exports = mongoose.model('images', checkBoxSchema);
