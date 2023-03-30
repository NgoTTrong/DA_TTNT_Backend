const {createUser, loginUser} = require('../services/user.service')

module.exports = {
    createUser: async (req,res) => {
        let userInfo = req.body.userInfo
        let data = await createUser(userInfo)
        res.status(data.code).json(data.message)
    },

    loginUser: async (req,res) => {
        let userInfo = req.body.userInfo
        let data = await loginUser(userInfo)
        res.status(data.code).json(data.message)
    }
}