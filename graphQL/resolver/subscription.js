const { pubsub } = require('../helper');
module.exports = {
    Subscription: {
        user: {
            subscribe(parent, args, ctx, info) {
                return pubsub.asyncIterator('userTopic') //Topic
            }
        }
    }
}