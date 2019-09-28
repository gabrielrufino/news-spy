const db = require('../init/db')

const create = user => {
  db
    .get('users')
    .push(user)
    .write()

  return user
}

module.exports = {
  create
}
