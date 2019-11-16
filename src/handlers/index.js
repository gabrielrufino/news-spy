const frequency = require('./frequency')
const search = require('./search')
const start = require('./start')
const spy = require('./spy')

module.exports = ({ bot, repositories, services }) => {
  bot.start(start(repositories))

  bot.command('frequency', frequency(repositories))
  bot.command('search', search(services))
  bot.command('spy', spy(repositories))
}
