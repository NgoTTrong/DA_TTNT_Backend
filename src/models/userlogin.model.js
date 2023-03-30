const mongoose = require('mongoose')

const UserLoginSchema = new mongoose.Schema({
    username: String,
    password: String,
},{
    timestamps: true,
    collection: "userslogin"
})

module.exports = mongoose.model('UserLogin', UserLoginSchema);