require('dotenv').config();
const express = require("express")
const app = express()
const connectdb = require('./config/db')
const userroute = require('./routes/userRoute')
app.set('view engine','ejs')


connectdb();


app.use(express.json())
// app.use(express.urlencoded({extended:true}))


//routes
app.use('/user',userroute)



app.get('/',(req,res) =>{
    res.send("it works")
});
app.listen(process.env.PORT)