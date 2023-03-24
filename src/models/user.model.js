const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    key: String,
},{
    timestamps: true,
    collection: "users"
})

module.exports = mongoose.model('User', UserSchema);