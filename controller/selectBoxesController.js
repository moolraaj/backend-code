require('../database/config')
const selectBoxModel = require('../model/SelectBoxModel')





exports.selectboxPost = async (req, resp) => {
    try {
        const data = new selectBoxModel(req.body)
        let result = await data.save()
        resp.send(result)
        console.log(result)
    } catch (error) {
        resp.send('there is a problem in api')
    }


}