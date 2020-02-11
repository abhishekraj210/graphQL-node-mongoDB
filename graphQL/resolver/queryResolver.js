const userModels = require('../../model/users');

module.exports = {
    RootQuery: {
        userList: async() => {
            try {
                const getUser = await userModels.find();
                return getUser;
            } catch (error) {
                return error;
            }
        }
    }
}