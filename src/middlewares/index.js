const attachUser = require('./attach-user')
const checkActive = require('./check-active')
const command = require('./command')
const registerMessage = require('./register-message')

const Middlewares = ({ bot, repositories }) => {
  bot.use(attachUser({ repositories }))
  bot.use(registerMessage({ repositories }))
  bot.use(checkActive)
  bot.use(command)
}

module.exports = Middlewares
