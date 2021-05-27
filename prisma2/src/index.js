const { GraphQLServer } = require('graphql-yoga')
const { resolvers } = require('./resolvers')
const { PrismaClient } = require('@prisma/client')


//Allow cross
const options = {
  cors: {
    origin: [
      "http://localhost:3000"
    ]
  }
};

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
});

prisma.$on('query', e => {
  console.log("Query: " + e.query)
  console.log("Duration: " + e.duration + "ms")
})

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  middlewares: [],
  context: request => {
    return {
      ...request,
      prisma
    }
  },
})

server.start(options, () => console.log('Server is running on http://localhost:4000'))