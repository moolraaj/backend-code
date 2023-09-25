require('../database/config')
const ProductModel = require('../model/ProductModel')





exports.productPost = async (req, resp) => {
    try {
        const data = new ProductModel(req.body)
        let result = await data.save()
        resp.send(result)
        console.log(result)
    } catch (error) {
        resp.send('there is a problem in api')
    }


}

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

 





exports.productPost = async (req, resp) => {
    try {
        const data = new ProductModel(req.body)
        let result = await data.save()
        resp.send(result)
        console.log(result)
    } catch (error) {
        resp.send('there is a problem in api')
    }


}