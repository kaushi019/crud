
module.exports = {
    mongoConnectionURL : process.env.MONGO_DB_STRING || "mongodb+srv://kaushi019:kaushi019@cluster0.vmzti.mongodb.net/courses?retryWrites=true&w=majority",
    webPort : process.env.PORT || 3000
}