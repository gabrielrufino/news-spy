require('./init')
require('./src/jobs')

const bot = require('./init/bot')
const helpers = require('./src/helpers')
const user = require('./src/repositories/user')

const start = require('./src/handlers/start')
const search = require('./src/handlers/search')
const spy = require('./src/handlers/spy')

bot.start(start)
bot.command('search', search)
bot.command('spy', spy)

bot.launch()
  .then(() => {
    console.log('News Spy funcionando!')
  })
