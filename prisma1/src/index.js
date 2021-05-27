const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../generated/prisma-client')
const { resolvers } = require('./resolvers')

//Allow cross
const options = {
  cors: {
    origin: [
      "http://localhost:3000"
    ]
  }
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  middlewares: [],
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(options, () => console.log('Server is running on http://localhost:4000'))