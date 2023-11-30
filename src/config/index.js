require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    mongoDB: process.env.MONGODB_URI,
}