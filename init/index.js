const init = async () => {
  const env = require('./env')

  const db = await require('./db')()
  const repositories = require('./repositories')(db)

  const bot = require('./bot')

  return {
    env,
    repositories,
    bot
  }
}

module.exports = init
