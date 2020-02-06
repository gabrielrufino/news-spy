const router = require('./router')

const handlers = modules => {
  const { bot } = modules

  router.forEach(({ alternatives, command, handler }) => {
    bot.command([command, ...alternatives], handler(modules))
  })
}

module.exports = handlers
