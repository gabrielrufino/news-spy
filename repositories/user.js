const db = require('../init/db')
const subject = require('./subject')

const users = db.get('users')

const create = data => {
  const user = users.find({ id: data.id }).value()

  if (!user) {
    const newUser = {
      ...data,
      following: []
    }

    return users
      .push(newUser)
      .write()
  } else {
    return user
  }
}

const follow = (id, expression) => {
  const user = users
    .find({ id })
    .value()

  user.following.push(expression)

  users
    .find({ id })
    .assign(user)
    .write()

  subject.wasFollowed(expression, user.id)

  return user
}

module.exports = {
  create,
  follow
}
