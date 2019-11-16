const init = require('./init')

const handlers = require('./src/handlers')
const jobs = require('./src/jobs')

init()
  .then(({ bot, repositories }) => {
    handlers({ bot, repositories })
    jobs({ repositories, bot })

    bot.launch()
      .then(() => {
        console.log('News Spy funcionando!')
      })
  })
