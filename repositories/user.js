const db = require('../init/db')
const subject = require('./subject')

let users

db()
  .then(db => {
    users = db.collection('users')
  })

const create = async data => {
  try {
    await users.insertOne({
      telegram_id: data.id,
      is_bot: data.is_bot,
      first_name: data.first_name,
      last_name: data.last_name,
      username: 'gabrielrufino',
      language_code: 'en'
    })
  } catch (error) {
    throw new Error(error)
  }
}

const follow = (_, expression) => {
  subject.createIfNotExists(expression)
}

module.exports = {
  create,
  follow
}
