const dayjs = require('dayjs')
const helpers = require('../helpers')

const search = services => context => {
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
      const response = data.articles.map(news => `${news.title}\n${news.url}\n\n`)
      context.reply(response.join(''))
    })
    .catch(error => {
      throw new Error(error)
    })
}

module.exports = search
