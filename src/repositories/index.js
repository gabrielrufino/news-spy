const subject = require('./subject')
const user = require('./user')

const repositories = db => ({
  subject: subject(db),
  user: user(db)
})

module.exports = repositories
