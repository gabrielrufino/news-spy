const Api = require('./api')
const Events = require('./events')
const Handlers = require('./handlers')
const Jobs = require('./jobs')
const Middlewares = require('./middlewares')
const Services = require('./services')

const app = async ({ bot, repositories }) => {
  const services = Services()
  const jobs = await Jobs({ repositories, bot, services })
  const handlers = Handlers({ bot, jobs, repositories, services })

  Api()
  Events({ bot, handlers, repositories })
  Middlewares({ bot, repositories })

  bot.launch()
    .then(() => {
      console.log('News Spy funcionando!')
    })
}

module.exports = app
