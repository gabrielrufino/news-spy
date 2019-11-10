const frequency = require('./frequency')
const search = require('./search')
const start = require('./start')
const spy = require('./spy')

module.exports = bot => {
  bot.start(start)

  bot.command('frequency', frequency)
  bot.command('search', search)
  bot.command('spy', spy)
}
