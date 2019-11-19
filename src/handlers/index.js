const broadcast = require('./broadcast')
const frequency = require('./frequency')
const search = require('./search')
const start = require('./start')
const spy = require('./spy')

const handlers = ({ bot, repositories, services }) => {
  bot.start(start({ repositories }))

  bot.command('broadcast', broadcast({ repositories, bot }))
  bot.command('frequency', frequency({ repositories }))
  bot.command('search', search({ services }))
  bot.command('spy', spy({ repositories }))
}

module.exports = handlers
