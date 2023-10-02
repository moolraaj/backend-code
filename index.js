const express=require('express')
const app=express()
const path=require('path')
const cors=require('cors')
const userRouter=require('./router/userRouter')
const productRouter=require('./router/productRouter')
const checkboxRouter=require('./router/checkboxRouter')
const imageRouter=require('./router/imageRouter')
const selectboxRouter=require('./router/selectBoxRouter')

const dirPathUploadsMain=path.join(__dirname,'uploads')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

console.log(dirPathUploadsMain)
app.use('/upload', express.static(dirPathUploadsMain));


 
 
app.use('/user',userRouter.router)
app.use('/product',productRouter.router)
app.use('/data',checkboxRouter.router)
app.use('/upload',imageRouter)
app.use('/language',selectboxRouter.router) 
 


 
  
   
  
 
 


 



app.listen(1500)