const init = require('./init')

const handlers = require('./src/handlers')
const jobs = require('./src/jobs')

init()
  .then(({ bot, repositories, services }) => {
    handlers({ bot, repositories, services })
    jobs({ repositories, bot, services })

    bot.launch()
      .then(() => {
        console.log('News Spy funcionando!')
      })
  })
