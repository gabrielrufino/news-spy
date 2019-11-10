const { bot } = require('./init')
const handlers = require('./src/handlers')

require('./src/jobs')
handlers(bot)

bot.launch()
  .then(() => {
    console.log('News Spy funcionando!')
  })
