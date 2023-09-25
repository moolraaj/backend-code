const express = require('express')

const router = express.Router()
const productController = require('../controller/productController')




router.post('/add-product', productController.productPost)
router.get('/get-product', productController.productGet)
router.delete('/delete-product/:id', productController.productDelete)
router.get('/search-product/:key', productController.productSearch)
router.get('/single-product/:id', productController.productFindOne)
router.put('/single-product/:id', productController.productUpdateOne)
router.get('/filter-product', productController.productFilter)






exports.router = router




















