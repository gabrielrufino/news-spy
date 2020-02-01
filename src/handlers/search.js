const dayjs = require('dayjs')
const helpers = require('../helpers')

const search = ({ services }) => context => {
  const subject = helpers.removeCommand(context.message.text)

  services.news.get('top-headlines', {
    params: {
      q: subject,
      apiKey: process.env.NEWS_API_TOKEN,
      from: dayjs().format('YYYY-MM-DD'),
      to: dayjs().format('YYYY-MM-DD')
    }
  })
    .then(({ data }) => {
      const news = data.articles.map(news => `${news.title}\n${news.url}\n\n`)
      const response = news.join('')

      if (response) {
        context.reply(response)
      } else {
        context.reply(`Desculpe :( Não encontramos nenhuma notícia recente sobre ${subject}`)
      }
    })
    .catch(error => {
      throw new Error(error)
    })
}

module.exports = search
