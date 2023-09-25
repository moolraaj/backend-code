const express = require('express')

const router = express.Router()
const checkBoxController = require('../controller/CheckboxValueController')




router.post('/', checkBoxController.checkboxPost)
router.get('/', checkBoxController.checkboxGet) 
 

exports.router = router