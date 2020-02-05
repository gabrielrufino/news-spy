const cron = require('cron')

const cronTime = '0 0 0 * * *'

const clearNews = ({ repositories }) => new cron.CronJob(cronTime, () => {
  repositories.user.clearNews()
}).start()

module.exports = clearNews
