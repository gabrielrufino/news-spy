const user = require('./user')
const votes = require('./votes')

const Repositories = db => ({
  user: user(db),
  votes: votes(db)
})

module.exports = Repositories
