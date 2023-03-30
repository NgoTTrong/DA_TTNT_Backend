const route = require('express').Router()
const {createUser, loginUser} = require('../controllers/user.controller')

route.post('/userlogin',loginUser)
route.post('/userreg', createUser)

module.exports = route