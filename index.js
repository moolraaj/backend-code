const express=require('express')
const app=express()
const multer=require('multer')
const cors=require('cors')
const userRouter=require('./router/userRouter')
const productRouter=require('./router/productRouter')
const checkboxRouter=require('./router/checkboxRouter')
const imageRouter=require('./router/imageRouter')
const selectboxRouter=require('./router/selectBoxRouter')

app.use(express.json())
app.use(cors())

 
 
app.use('/user',userRouter.router)
app.use('/product',productRouter.router)
app.use('/data',checkboxRouter.router)
app.use('/upload',imageRouter.router)
app.use('/language',selectboxRouter.router) 
 


const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads');
      },
      filename: function (req, file, cb) {
        const fileExtension = file.originalname.split('.').pop();  
        cb(null, `${file.originalname}-${Date.now()}.${fileExtension}`);
      },
    }),
  }).single('products');
  
  // app.post('/upload', upload, (req, resp) => {
  //   resp.send('image-upload');
  // });
  
 
 


 



app.listen(1500)