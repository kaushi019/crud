const express = require('express')
const mongoose = require('mongoose')
const app = express()
const ejs=require('ejs')
const path=require('path')
const passport = require('passport')
const cookieSession = require('cookie-session')

const configs = require('./backend/config/config.js')
const indexRoutes = require('./backend/routes/index.js')
const dbConnect = require('./backend/DB/dbConnect.js')


app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use(passport.initialize());
app.use(passport.session());

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(__dirname + '/views'));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.use('/',indexRoutes);


dbConnect.connect((cb)=>{
    console.log(cb);
});

// abssc


const PORT = configs.webPort;
app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT)
})