require('../database/config');
const imageModel = require('../model/imageUploadModel');

 

exports.uploadImagePost = async (req, res) => {
  try {
    let response = new imageModel();
    response.profileImage.data = req.file.buffer;
    response.profileImage.contentType = req.file.mimetype;
    let result = await response.save();
    res.status(200).json({ message: 'Image uploaded successfully', result });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

