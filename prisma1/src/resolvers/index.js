const { Query } = require('./Query')
const { Bill } = require('./Bill')

const resolvers = {
  Query,
  Bill,
}

module.exports = {
  resolvers,
}