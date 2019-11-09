require('./src/init')
require('./src/jobs')

const axios = require('axios')
const dayjs = require('dayjs')
const bot = require('./src/init/bot')
const helpers = require('./src/helpers')
const user = require('./src/repositories/user')

bot.start(context => {
  user.createIfNotExists(context.from)

  context.reply('Bem-vindo ao News Spy!')
})

bot.command('search', context => {
  const subject = helpers.removeCommand(context.message.text)

  axios.get('https://newsapi.org/v2/top-headlines', {
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

bot.command('spy', context => {
  const expression = helpers.removeCommand(context.message.text)

  const userId = context.from.id
  user.follow(userId, expression)

  context.reply(`Deixe comigo! Eu vou espionar notícias relacionadas à ${expression} para você.`)
})

bot.launch()
  .then(() => {
    console.log('News Spy funcionando!')
  })
