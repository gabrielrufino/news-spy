const router = require('./router')

const events = ({ bot }) => {
  router.forEach(({ events, handler }) => {
    bot.on(events, handler)
  })
}

module.exports = events
