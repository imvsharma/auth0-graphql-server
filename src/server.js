const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');
// Resolver
const resolvers = {
    hello: () => "Hello World"
};

const app = express();

app.use("/graphql", graphqlHTTP({schema, rootValue: resolvers}));

app.listen(4000);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);