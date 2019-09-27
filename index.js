require('dotenv').config()

const axios = require('axios')
const dayjs = require('dayjs')
const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(context => context.reply('Bem-vindo ao News Spy!'))

bot.command('search', context => {
  const subject = context
                    .message
                    .text
                    .split(' ')
                    .slice(1)
                    .join('+')

  axios.get(`https://newsapi.org/v2/top-headlines`, {
    params: {
      q: subject,
      apiKey: process.env.NEWS_API_TOKEN,
      from: dayjs().format('YYYY-MM-DD'),
      to: dayjs().format('YYYY-MM-DD')
    }
  })
    .then(({ data }) => {
      const response = data.articles.map(news => `${news.title}\n${news.url}\n\n`)
      context.reply(response.join(''))
    })
    .catch(error => {
      console.log(error)
    })
})

bot.launch()
  .then(() => {
    console.log('News Spy funcionando!')
  })
