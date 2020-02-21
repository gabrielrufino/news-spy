const command = require('./command')
const registerMessage = require('./register-message')
const userId = require('./user-id')

const Middlewares = ({ bot, repositories }) => {
  bot.use(userId({ repositories }))
  bot.use(registerMessage({ repositories }))
  bot.use(command)
}

module.exports = Middlewares
