const cron = require('cron')
const dayjs = require('dayjs')

const cronTime = '0 0 7,10,12,15,18,21 * * *'

const spy = (userId, { repositories, bot, services }) => new cron.CronJob(cronTime, async () => {
  try {
    const user = await repositories.user.getById(userId)

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

        const articles = await Promise.all(
          data.articles.map(async article => {
            const response = await services.algorithmia
              .algo('nlp/SentimentAnalysis/1.0.5')
              .pipe({
                document: article.title,
                language: 'auto'
              })

            article.sentiment = Math.abs(response.get()[0].sentiment)

            return article
          })
        )

        articles.sort((a, b) => a.sentiment < b.sentiment ? 1 : -1)

        const response = articles.map(news => `${news.title}\n${news.url}\n\n`).join('')

        if (response) {
          bot.telegram.sendMessage(user.telegram.id, response)
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
