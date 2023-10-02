require('../database/config')
const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productname:String,
    price:Number,
    category:String,
    userID:String,
    company:String,
    exportproduct:[String],
    productImageName:String,
    productImageUrl:String
    
  
})

const productModel=mongoose.model('products',productSchema)

module.exports=productModel