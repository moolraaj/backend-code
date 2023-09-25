const express=require('express')
const router=express.Router()
const usercontroller=require('../controller/userController')

router.post('/register',usercontroller.userPost) 
router.post('/login',usercontroller.userPostLogin)   

exports.router=router

