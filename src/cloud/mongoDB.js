const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to Mongo DB')
}).catch(err => console.log(err))

module.exports = mongoose;