const router = require('./router')

const handlers = modules => {
  const { bot } = modules

  router.forEach(({ command, handler }) => {
    bot.command(command, handler(modules))
  })
}

module.exports = handlers
