require('../database/config')
const ProductModel = require('../model/ProductModel')
 

 const multer=require('multer')
 const path=require('path')

 const dirPathUploadsFirst=path.join(__dirname,'../uploads')
 console.log(dirPathUploadsFirst)

 exports.upload=multer({
    
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,dirPathUploadsFirst)
        },
        filename:function(req,file,cb){
            cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
    })
}).single('upload')
  
exports.productPost=(async (req, resp) => {
    try {
        const data = new ProductModel({
            productname: req.body.productname,
            category: req.body.category,
            price: req.body.price,
            company:req.body.company,
            userID: req.body.userID,
            exportproduct:req.body.exportproduct,
            productImageName: req.file.originalname,
            productImageUrl: `http://localhost:1500/upload/${req.file.filename}`,
        });

        const savedData = await data.save();
        resp.status(201).json(savedData);
        console.log(savedData);
    } catch (error) {
        resp.status(500).json({ error: 'Internal server error' });
    }
});

exports.productGet = async (req, resp) => {
    try {
        const data = await ProductModel.find()
        if (data) {
            resp.send(data)
            console.log(data)
        }
    } catch (error) {
        resp.send('there is a problem in api')
    }
}

exports.productDelete = async (req, resp) => {
    try {
        const data = await ProductModel.deleteOne({ _id: req.params.id })
        if (data) {
            resp.send(data)
            console.log(data)
        }
    } catch (error) {
        resp.send('there is a problem in api')
    }
}


 
exports.productSearch = async (req, resp) => {
    try {
        const data = await ProductModel.find({
            "$or": [
                { name: { $regex: req.params.key } },
                { price: { $regex: req.params.key } },
                { category: { $regex: req.params.key } },
                { company: { $regex: req.params.key } },
            ]
        })
        if (data) {
            resp.send(data)
            console.log(data)
        } else {
            resp.status(404).send('No matching products found');
        }
    } catch (error) {
        console.error(error);
        resp.status(500).send('Internal server error');
    }
}






exports.productFindOne = async (req, resp) => {
    try {
        const data = await ProductModel.findOne({ _id: req.params.id })
        if (data) {
            resp.send(data)
            console.log(data)
        }
    } catch (error) {
        resp.send('there is a problem in api')
    }
}

exports.productUpdateOne = async (req, resp) => {
    try {
        const data = await ProductModel.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        )
        resp.send(data)
    } catch (error) {
        resp.send('there is a problem in api')
    }
}


exports.productFilter = async (req, resp) => {
    try {
        let page = req.query.page
        let pageSize = 4
        let product = ProductModel.find()
        if (req.query.sort) {
            let sortQuery = ({ [req.query.sort]: req.query.order })
            product = product.sort(sortQuery)
        }

        if (page) {
            product = product.skip(pageSize * (page - 1)).limit(pageSize)
        }
        let data = await product.exec()
        resp.send(data)


    } catch (error) {
        resp.send('there is a problem in api')
    }
}

 




 