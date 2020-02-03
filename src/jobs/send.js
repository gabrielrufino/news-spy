const cron = require('cron')

const cronTime = '0 */30 * * * *'

const send = (userId, { repositories, bot }) => new cron.CronJob(cronTime, async () => {
  try {
    const user = await repositories.user.getById(userId)

    const news = user.news.filter(({ sent }) => !sent)[0]

    const index = user.news.indexOf(news)

    bot.telegram.sendMessage(user.telegram.id, news.url)
    repositories.user.setNewsAsSent(userId, index)
  } catch (error) {
    throw new Error(error)
  }
}).start()

module.exports = send
