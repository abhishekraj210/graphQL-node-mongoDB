const userModels = require('../../model/users');
const { pubsub } = require('../helper');

module.exports = {
    RootMutation: {
        createUser: async(parent, args, ctx, info) => {
            try {
                console.log('user create===============', args);
                let query = { 'username': args.newUser.username };
                const createUserDetails = await userModels.findOneAndUpdate(query, args.newUser, { upsert: true, new: true });
                console.log('user create===============', createUserDetails);
                pubsub.publish('userTopic', {
                    user: createUserDetails
                });
                return createUserDetails;
            } catch (error) {
                return error;
            }
        },
        deleteUser: async(parent, args, ctx, info) => {
            let responseMSG = {};
            try {
                let query = { 'username': args.username };
                const createUserDetails = await userModels.findOneAndDelete(query);
                console.log('createUserDetails--------------------', createUserDetails);
                if (createUserDetails == null) {
                    responseMSG.response = "No User found for this opertaion";
                    return responseMSG;
                } else {
                    responseMSG.response = "Success";
                    return responseMSG;
                }

            } catch (error) {
                responseMSG.response = "Fail";
                return responseMSG;
            }
        }
    }
}