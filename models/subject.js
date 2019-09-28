const db = require('../init/db')

const create = expression => {
  const subject = {
    subject: expression,
    followers: []
  }

  db
    .get('subjects')
    .push(subject)
    .write()

  return subject
}

module.exports = {
  create
}
