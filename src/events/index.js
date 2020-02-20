const router = require('./router')

const events = ({ bot, repositories }) => {
  router.forEach(({ events, handler }) => {
    bot.on(events, handler({ repositories }))
  })
}

module.exports = events
