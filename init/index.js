const init = async () => {
  const env = require('./env')

  const db = await require('./db')()
  const repositories = require('./repositories')(db)

  const services = require('./services')

  const bot = require('./bot')

  return {
    env,
    repositories,
    services,
    bot
  }
}

module.exports = init
