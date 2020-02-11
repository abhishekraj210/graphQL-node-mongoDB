/* building GraphQL Schema */
module.exports = `
type userData {
    _id: ID!
    username: String!
    age: Int!
    blood_group: String!
	nationality: String!
	contact_no: Int!
}

input userInput{
    username: String!
    age: Int!
    blood_group: String!
	nationality: String!
	contact_no: Int!
}

type RootQuery {
    userList: [userData!]!
}

type DeleteRes{
    response:String!
}
type RootMutation {
    createUser(newUser: userInput): userData!
    deleteUser(username: String!): DeleteRes!
}

type Subscription{
    user: userData!
}

schema {
    query: RootQuery
    mutation: RootMutation
    subscription: Subscription
}
`;