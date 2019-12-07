const init = require('./init')

const handlers = require('./src/handlers')
const jobs = require('./src/jobs')
const middlewares = require('./src/middlewares')
const services = require('./src/services')

init()
  .then(({ bot, repositories }) => {
    middlewares({ bot, repositories })
    handlers({ bot, repositories, services })
    jobs({ repositories, bot, services })

    bot.launch()
      .then(() => {
        console.log('News Spy funcionando!')
      })
  })
