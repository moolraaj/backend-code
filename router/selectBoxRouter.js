

const express = require('express')

const router = express.Router()
const selectBoxController = require('../controller/selectBoxesController')




router.post('/', selectBoxController.selectboxPost)
 
 

exports.router = router