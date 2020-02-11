const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema/index');
const resolvers = require('./graphQL/resolver/index');
const { GraphQLServer } = require('graphql-yoga');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var database = "mongodb://localhost:27017/test"
mongoose.connect(database)
    .then(() => {
        console.log('Connection to DB successful');
    })
    .catch(err => {
        console.log('Db connection error====', err);
    });

const server = new GraphQLServer({
    typeDefs,
    resolvers
});
server.start(() => {
    console.log('GraphQL Listening on port 4000');
});