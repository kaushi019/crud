const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    username : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    googleId : {type:String}
});

module.exports = UserAccount = mongoose.model("UserAccount",userSchema);