const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { schema } = require('./graphql/schema');

async function startServer() {
    try {
        const server = new ApolloServer({ schema });
        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });
        console.log(`🚀  Server ready at: ${url}`);
    } catch (error) {
      console.error('Error starting server:', error);
    }
  }
  
  startServer();

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });