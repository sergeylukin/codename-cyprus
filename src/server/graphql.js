const fastifyGQL = require('fastify-gql')

const programmers = {
  serge: {
    name: 'Serge'
  },
}

const schema = `
  type Programmer {
    name: String
  }

  type Query {
    programmer(name: String): Programmer
  }
`

const resolvers = {
  Query: {
    programmer (_, { name }) {
      return programmers[name]
    }
  },
}

function registerGraphQL(fastify, opts, next) {
  fastify.register(fastifyGQL, {
    schema,
    resolvers,
    graphiql: true
  })

  next()
}

module.exports = registerGraphQL
