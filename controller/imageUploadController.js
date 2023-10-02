 

require('../database/config');
const imageModel = require('../model/imageUploadModel');
const multer=require('multer')
const path=require('path')
 
exports.upload=multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,'./uploads')
    },
    filename:function(req,file,cb){
      cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })

}).single('profile') 


exports.uploadImagePost = async (req, res) => {
  try {
    let response = new imageModel({
      imageName: req.file.fieldname,
      imageUrl: `http://localhost:1500/uploads/${req.file.filename}`,
    });
    response = await response.save();
    if (response) {
      res.json({ okay: 'image upload successfully' });
    } else {
      res.send('file not uploaded');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.uploadImageGet = async (req, res) => {
  try {
    let data=await imageModel.find()
    res.send(data)
    
  } catch (error) {
    res.send('images not found')
    
  }
};


