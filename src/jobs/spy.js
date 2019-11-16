const cron = require('cron')
const dayjs = require('dayjs')

const spy = ({ repositories, bot, services }) => new cron.CronJob('* */20 * * * *', async () => {
  try {
    const subjects = await repositories.subject.list()

    subjects.forEach(async sub => {
      try {
        const { data } = await services.news.get('top-headlines', {
          params: {
            q: sub.expression,
            from: dayjs().format('YYYY-MM-DD'),
            to: dayjs().format('YYYY-MM-DD'),
            apiKey: NEWS_API_TOKEN
          }
        })

        const response = data.articles.map(news => `${news.title}\n${news.url}\n\n`)

        if (response) {
          sub.followers.forEach(follower => {
            bot.telegram.sendMessage(follower, response.join(''))
          })
        }
      } catch (error) {
        throw new Error(error)
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}).start()

module.exports = spy
