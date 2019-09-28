require('./init')

const axios = require('axios')
const bot = require('./init/bot')
const dayjs = require('dayjs')
const db = require('./init/db')
const helpers = require('./helpers')

bot.start(context => {
  db
    .get('users')
    .push(context.from)
    .write()


  context.reply('Bem-vindo ao News Spy!')
})

bot.command('search', context => {
  const subject = helpers.removeCommand(context.message.text)

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

bot.command('spy', context => {
  const subject = helpers.removeCommand(context.message.text)

  context.reply(`Deixe comigo! Eu vou espionar notícias relacionadas à ${subject} para você.`)
})

bot.launch()
  .then(() => {
    console.log('News Spy funcionando!')
  })
