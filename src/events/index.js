const router = require('./router')

const Events = ({ bot, handlers, repositories }) => {
  router.forEach(({ events, listener }) => {
    bot.on(events, listener({ handlers, repositories }))
  })
}

module.exports = Events
