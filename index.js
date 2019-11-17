const init = require('./init')

const handlers = require('./src/handlers')
const middlewares = require('./src/middlewares')
const jobs = require('./src/jobs')

init()
  .then(({ bot, repositories, services }) => {
    middlewares({ bot, repositories })
    handlers({ bot, repositories, services })
    jobs({ repositories, bot, services })

    bot.launch()
      .then(() => {
        console.log('News Spy funcionando!')
      })
  })
