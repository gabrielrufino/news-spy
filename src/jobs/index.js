const clearNews = require('./clear-news')
const search = require('./search')
const send = require('./send')

const jobs = async ({ repositories, bot, services }) => {
  const users = await repositories.user.getAll()

  users.forEach(user => {
    search(user._id, { repositories, services })
    send(user._id, { repositories, bot })
  })

  clearNews({ repositories })

  return {
    send,
    search
  }
}

module.exports = jobs
