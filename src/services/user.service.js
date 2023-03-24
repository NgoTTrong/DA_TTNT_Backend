const User = require('../models/user.model')

module.exports = {
    createUser: async (userInfo) => {
        let user = new User(userInfo);
        await user.save();
        return {
            code: 200,
            message: userInfo
        }
    }
}