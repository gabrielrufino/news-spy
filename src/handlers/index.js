const router = require('./router')

const Handlers = modules => {
  const { bot } = modules

  const handlers = {}

  router.forEach(({ alternatives, command, handler, name }) => {
    bot.command([command, ...alternatives], handler(modules))
    handlers[name] = handler(modules)
  })

  return handlers
}

module.exports = Handlers
