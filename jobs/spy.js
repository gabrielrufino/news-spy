const cron  = require('cron')
const dayjs = require('dayjs')

const bot     = require('../init/bot')
const newsApi = require('../init/news-api')
const subject = require('../repositories/subject')

const spy = new cron.CronJob('* */20 * * * *', () => {
  subject
    .list()
    .forEach(sub => {
      newsApi.get(`top-headlines`, {
        params: {
          q: sub.expression,
          from: dayjs().format('YYYY-MM-DD'),
          to: dayjs().format('YYYY-MM-DD'),
          apiKey: process.env.NEWS_API_TOKEN
        }
      })
        .then(({ data }) => {
          const response = data.articles.map(news => `${news.title}\n${news.url}\n\n`)

          sub.followers.forEach(follower => {
            bot.telegram.sendMessage(follower, response.join(''))
          })
        })
        .catch(error => {
          console.log(error)
        })
    })
})

module.exports = spy
