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
  subject.create(expression)

  const user = users
    .find({ id })
    .value()

  if (!user.following.includes(expression)) {
    user.following.push(expression)
  }

  subject.wasFollowed(expression, user.id)

  return users
    .find({ id })
    .assign(user)
    .write()
}

module.exports = {
  create,
  follow
}
