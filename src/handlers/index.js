const router = require('./router')

const Handlers = modules => {
  const { bot } = modules

  router.forEach(({ alternatives, command, handler }) => {
    bot.command([command, ...alternatives], handler(modules))
  })
}

module.exports = Handlers
