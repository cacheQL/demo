const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const path = require("path");
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const schema = require('./schema');
const cacheQL = require('./cacheql');


app.use(express.json());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValues: root
}));


app.use(express.static("public"));

app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
