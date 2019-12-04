const { buildSchema } = require('graphql');

//capitalize operation type in schema
const schema = buildSchema(`
    type Query {
        name: String!
        message: String!
        
    }

    type Mutation {
        name: String!
        message: String!
    }
`);

module.exports = schema;
