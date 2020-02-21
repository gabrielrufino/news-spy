const api = require('./api')
const events = require('./events')
const handlers = require('./handlers')
const Jobs = require('./jobs')
const middlewares = require('./middlewares')

const app = async ({ bot, repositories }) => {
  const services = require('./services')

  api()
  events({ bot, repositories })
  middlewares({ bot, repositories })
  const jobs = await Jobs({ repositories, bot, services })
  handlers({ bot, jobs, repositories, services })

  bot.launch()
    .then(() => {
      console.log('News Spy funcionando!')
    })
}

module.exports = app
