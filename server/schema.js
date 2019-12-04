const { buildSchema } = require("graphql");

//capitalize operation type in schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

module.exports = schema;
