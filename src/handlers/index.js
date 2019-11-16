const frequency = require('./frequency')
const search = require('./search')
const start = require('./start')
const spy = require('./spy')

module.exports = ({ bot, repositories }) => {
  bot.start(start(repositories))

  bot.command('frequency', frequency(repositories))
  bot.command('search', search)
  bot.command('spy', spy(repositories))
}
