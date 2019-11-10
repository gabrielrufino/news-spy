const db = require('../../init/db')
const subject = require('./subject')

let users

db()
  .then(db => {
    users = db.collection('users')
  })

const createIfNotExists = async data => {
  try {
    const user = await users.findOne({ 'telegram.id': data.id })

    if (!user) {
      await users.insertOne({
        telegram: {
          id: data.id,
          is_bot: data.is_bot,
          first_name: data.first_name,
          last_name: data.last_name,
          username: 'gabrielrufino',
          language_code: 'en'
        },
        settings: {
          frequency: 'every-hour'
        }
      })
    }
  } catch (error) {
    throw new Error(error)
  }
}

const follow = async (follower, expression) => {
  try {
    await subject.createIfNotExists(expression)
    return await subject.addFollower(follower, expression)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createIfNotExists,
  follow
}
