const Api = require('./api')
const Events = require('./events')
const Handlers = require('./handlers')
const Jobs = require('./jobs')
const Middlewares = require('./middlewares')

const app = async ({ bot, repositories }) => {
  const services = require('./services')

  Api()
  Events({ bot, repositories })
  Middlewares({ bot, repositories })
  const jobs = await Jobs({ repositories, bot, services })
  Handlers({ bot, jobs, repositories, services })

  bot.launch()
    .then(() => {
      console.log('News Spy funcionando!')
    })
}

module.exports = app
