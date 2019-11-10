require('./init')
require('./src/jobs')

const bot = require('./init/bot')
const handlers = require('./src/handlers')

handlers(bot)

bot.launch()
  .then(() => {
    console.log('News Spy funcionando!')
  })
