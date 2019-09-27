require('dotenv').config()

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(context => context.reply('Bem-vindo ao News Spy!'))

bot.launch()
  .then(() => {
    console.log('News Spy funcionando!')
  })
