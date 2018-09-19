
const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas')

const { buildSchema } = require('graphql')

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './graphql/**/*.graphql')), { all: true });
const rootValue = mergeResolvers(fileLoader(path.join(__dirname, './graphql/**/*.js')));


const schema = buildSchema(typeDefs);

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true, // 生产环境请设置为 false
}));

app.listen(3000, () => {
  console.log('start..')
});
