require('../database/config')
const checkBoxModel = require('../model/CheckboxValueModel')





exports.checkboxPost = async (req, resp) => {
    try {
        const data = new checkBoxModel(req.body)
        let result = await data.save()
        resp.send(result)
        console.log(result)
    } catch (error) {
        resp.send('there is a problem in api')
    }


}

exports.checkboxGet = async (req, resp) => {
    try {
        const data = await checkBoxModel.find()
        resp.send(data)
        console.log(data)
    } catch (error) {
        resp.send('there is a problem in api')
    }


}


