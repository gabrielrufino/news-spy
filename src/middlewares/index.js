const admin = require('./admin')
const command = require('./command')

const middlewares = ({ bot, repositories }) => {
  bot.use(command)
  bot.use(admin({ repositories }))
}

module.exports = middlewares
