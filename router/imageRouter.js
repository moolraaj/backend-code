const express = require('express');
const imageController = require('../controller/imageUploadController');
const upload = require('../controller/imageUploadController').upload;

const router = express.Router();

 
router.use('/profile', express.static('./uploads'));

router.post('/', upload, imageController.uploadImagePost);
router.get('/', imageController.uploadImageGet);

module.exports = router;

