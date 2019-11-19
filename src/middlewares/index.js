const admin = require('./admin')
const command = require('./command')
const userId = require('./user-id')

const middlewares = ({ bot, repositories }) => {
  bot.use(userId({ repositories }))
  bot.use(command)
  bot.use(admin({ repositories }))
}

module.exports = middlewares
