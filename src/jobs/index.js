const send = require('./send')
const spy = require('./spy')

const jobs = async ({ repositories, bot, services }) => {
  const users = await repositories.user.getAll()

  users.forEach(user => {
    send(user._id, { repositories, bot })
    spy(user._id, { repositories, services })
  })

  return {
    send,
    spy
  }
}

module.exports = jobs
