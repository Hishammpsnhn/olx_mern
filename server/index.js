import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './Routes/router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './Routes/userRoutes.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

//miidleware

//for post 
app.use ('/posts',postRoutes)
//for authentication
app.use ('/auth',userRoute)

//for checking purpose only
app.get('/',(req,res)=>{
    res.send("this is olx_clone-using MERN")
})

//constant from dotenv 
const PORT = process.env.PORT;

//connetion of mongodb and server
mongoose.connect( process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`server runnig on port : ${PORT}`)))
.catch((err)=> console.log(err.message) )



