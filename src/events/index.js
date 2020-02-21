const router = require('./router')

const Events = ({ bot, repositories }) => {
  router.forEach(({ events, handler }) => {
    bot.on(events, handler({ repositories }))
  })
}

module.exports = Events
