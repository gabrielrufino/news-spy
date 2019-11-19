const admin = require('./admin')
const user = require('./user')

const repositories = db => ({
  admin: admin(db),
  user: user(db)
})

module.exports = repositories
