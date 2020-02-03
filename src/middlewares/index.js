const admin = require('./admin')
const command = require('./command')
const registerMessage = require('./register-message')
const userId = require('./user-id')

const middlewares = ({ bot, repositories }) => {
  bot.use(userId({ repositories }))
  bot.use(registerMessage({ repositories }))
  bot.use(command)
  bot.use(admin({ repositories }))
}

module.exports = middlewares
