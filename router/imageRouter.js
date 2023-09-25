let express = require('express');
const multer = require('multer');
const imageController = require('../controller/imageUploadController');

let router = express.Router();
 



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${Date.now()}.${fileExtension}`);
  },
});

const upload = multer({ storage: storage }).single('snapshorts');

router.post('/', upload, imageController.uploadImagePost);

exports.router = router;
