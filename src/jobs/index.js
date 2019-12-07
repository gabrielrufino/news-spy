const spy = require('./spy')

const jobs = async ({ repositories, bot, services }) => {
  const users = await repositories.user.getAll()

  users.forEach(user => {
    spy(user._id, { repositories, bot, services })
  })

  return {
    spy
  }
}

module.exports = jobs
