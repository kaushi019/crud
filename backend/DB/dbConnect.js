const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_DB_STRING || "mongodb+srv://kaushi019:kaushi019@cluster0.vmzti.mongodb.net/courses?retryWrites=true&w=majority";
const options = {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
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