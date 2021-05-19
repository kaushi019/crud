const mongoose = require('mongoose')
const schema = mongoose.Schema;

const courseSchema = new schema({
    course : { type:String, required:true },
    articles : { type:String },
    isDeleted : { type : Boolean }
});


module.exports = User = mongoose.model("User",courseSchema);