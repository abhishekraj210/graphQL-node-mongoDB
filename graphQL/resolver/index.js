const getlistResolver = require('./queryResolver');
const createResolver = require('./mutationResolver');
const subscriptionResolver = require('./subscription');
/* mergining all resolver in a single object */
const rootResolver = {
    ...createResolver,
    ...getlistResolver,
    ...subscriptionResolver
};

module.exports = rootResolver;