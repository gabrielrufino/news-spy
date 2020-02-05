const cron = require('cron')
const dayjs = require('dayjs')

// const cronTime = '0 0 7,10,12,15,18,21 * * *'
const cronTime = '0 0,1,2 19 * * *'

const search = (userId, { repositories, services }) => new cron.CronJob(cronTime, async () => {
  try {
    const user = await repositories.user.getById(userId)
    const urls = user.news.map(news => news.url)

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

        const news = data.articles
          .filter(news => !urls.includes(news.url))
          .map(news => ({
            title: news.title,
            url: news.url,
            subject,
            sent: false
          }))

        repositories.user.pushNews(userId, news)
      } catch (error) {
        throw new Error(error)
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}).start()

module.exports = search
