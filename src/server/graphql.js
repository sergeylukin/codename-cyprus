const fastifyGQL = require('fastify-gql')

const programmers = {
  serge: {
    name: 'Serge',
    hasSmile: true,
    selfDescription: "I build stuff. Prefer to do rather than to talk about, however I believe in communication and I care less about whether decisions are right or wrong (I love failures) but rather care more about whether decisions are being taken based on knowns that were communicated clearly.",
    INTEL: "Agent INTEL reporting in...According to our info, here is what others would say about Serg - the good parts: passionate, smart, loyal. the bad: sometimes thinks too way out of the box and solves more problems than needed. gets less productive and less focused when not given a chance to express himself."
  },
}

const schema = `
  type Programmer {
    name: String,
    hasSmile: Boolean,
    selfDescription: String,
    INTEL: String
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
