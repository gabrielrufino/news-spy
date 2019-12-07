const cron = require('cron')
const dayjs = require('dayjs')

const spy = (userId, { repositories, bot, services }) => new cron.CronJob('0 */20 * * * *', async () => {
  try {
    const user = await repositories.user.getById(userId);

    const { NEWS_API_TOKEN } = process.env

    user.subjects.forEach(async subject => {
      try {
        const { data } = await services.news.get('top-headlines', {
          params: {
            q: subject,
            from: dayjs().format('YYYY-MM-DD'),
            to: dayjs().format('YYYY-MM-DD'),
            apiKey: NEWS_API_TOKEN
          }
        })

        const response = data.articles.map(news => `${news.title}\n${news.url}\n\n`)

        if (response) {
          bot.telegram.sendMessage(user.telegram.id, response.join(''))
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
