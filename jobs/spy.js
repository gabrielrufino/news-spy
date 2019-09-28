const axios = require('axios')
const cron  = require('cron')
const dayjs = require('dayjs')

const bot     = require('../init/bot')
const subject = require('../repositories/subject')

const spy = new cron.CronJob('0 */20 * * * *', () => {
  subject
    .list()
    .forEach(sub => {
      axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          q: sub.expression,
          apiKey: process.env.NEWS_API_TOKEN,
          from: dayjs().format('YYYY-MM-DD'),
          to: dayjs().format('YYYY-MM-DD')
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