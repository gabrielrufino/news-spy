const user = require('./user')

const repositories = db => ({
  user: user(db)
})

module.exports = repositories
