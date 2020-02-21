const user = require('./user')

const Repositories = db => ({
  user: user(db)
})

module.exports = Repositories
