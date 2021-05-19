const express = require('express')
const mongoose = require('mongoose')
const app = express()
const ejs=require('ejs')
const path=require('path')
const indexRoutes = require('./backend/routes/index.js')
const dbConnect = require('./backend/DB/dbConnect.js')


app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(__dirname + '/views'));



app.use('/',indexRoutes);


dbConnect.connect((cb)=>{
    console.log(cb);
});





const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT)
})