const admin = require('./admin')
const subject = require('./subject')
const user = require('./user')

const repositories = db => ({
  admin: admin(db),
  subject: subject(db),
  user: user(db)
})

module.exports = repositories
