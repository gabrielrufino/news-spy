const handlers = require('./handlers')
const jobs = require('./jobs')
const middlewares = require('./middlewares')

const app = ({ bot, repositories }) => {
  const services = require('./src/services')

  middlewares({ bot, repositories })
  handlers({ bot, repositories, services })
  jobs({ repositories, bot, services })

  bot.launch()
    .then(() => {
      console.log('News Spy funcionando!')
    })
}

module.exports = app
