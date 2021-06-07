const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name : {type:String, required:true},
    mobile : {type:Number, required:true},
    username : {type:String, required:true},
    password : {type:String, required:true}
});

module.exports = Usermodel = mongoose.model("Usermodel",userSchema);
//usermodel = collection name