const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');

const path = require('path');
//console.log('Loading files from:', path.join(__dirname, 'schema/*.graphql'));
const typeDefs = loadFilesSync(path.join(__dirname, 'schema/*.graphql'), {
  loaders: [new GraphQLFileLoader()],
});
console.log(typeDefs);

const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };

console.log(module.exports);