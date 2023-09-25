require('../database/config')
const userModel=require('../model/UserModel')

exports.userPost=async(req,resp)=>{
    try {
        const data=new userModel(req.body)
    let result=await data.save()
    result=result.toObject()
    delete result.password
    resp.send(result) 
    console.log(result)
    } catch (error) {
        resp.send('there is a problem in api')
    }
   

}


exports.userPostLogin=async(req,resp)=>{
    try {
        if(req.body.email && req.body.password){
            const data=await  userModel.findOne(req.body).select('-password')
            const result=await data.save()
            if(result){
                resp.send(result) 
            }else{
                resp.send({warning:'user not found'})

            }
            
            
        }else{
            resp.send({warning:'user not found'})
        }
        
    } catch (error) {
        resp.send({warning:'there is an error in your api so user not found'})
    }
   

}