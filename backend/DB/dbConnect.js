const mongoose = require('mongoose')
const configs = require('../config/config.js')


const mongo_url = configs.mongoConnectionURL;
const options = {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,
    useFindAndModify: false
};


module.exports.connect=(cb)=>{
    mongoose.connect(mongo_url,options,(err)=>{
        if(err)console.log("ERROR : ",err.message)
        else cb("DB Connected !!")
    })
}

module.exports.disconnect=()=>{
    mongoose.disconnect(()=>{
        console.log("DB disconnected ...")
    })
}