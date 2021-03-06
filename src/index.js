const Api = require('./api')
const Events = require('./events')
const Handlers = require('./handlers')
const Jobs = require('./jobs')
const Middlewares = require('./middlewares')
const Services = require('./services')

const app = async ({ bot, repositories }) => {
  Middlewares({ bot, repositories })

  const services = Services()
  const jobs = await Jobs({ repositories, bot, services })
  const handlers = Handlers({ bot, jobs, repositories, services })

  Events({ bot, handlers, repositories })
  Api({ repositories })

  bot.launch()
    .then(() => {
      console.log('News Spy funcionando!')
    })
    .catch(console.error)
}

module.exports = app
