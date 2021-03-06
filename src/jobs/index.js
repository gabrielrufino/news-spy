const { CronJob } = require('cron')

const router = require('./router')

const Jobs = async ({ bot, repositories, services }) => {
  const users = await repositories.user.getAll({ active: true })
  const jobsPerUser = router.filter(route => route.onePerUser)

  users.forEach(user => {
    jobsPerUser.forEach(job => {
      const handler = job.handler(user._id, { bot, repositories, services })
      const cronJob = new CronJob(job.cronTime, handler, null, false, 'America/Sao_Paulo')
      cronJob.start()
    })
  })

  const generalJobs = router.filter(route => !route.onePerUser)
  generalJobs.forEach(job => {
    const handler = job.handler({ bot, repositories, services })
    const cronJob = new CronJob(job.cronTime, handler, null, false, 'America/Sao_Paulo')
    cronJob.start()
  })

  return {
    initUser: (userId) => {
      jobsPerUser.forEach(job => {
        const handler = job.handler(userId, { bot, repositories, services })
        const cronJob = new CronJob(job.cronTime, handler, null, false, 'America/Sao_Paulo')
        cronJob.start()
      })
    }
  }
}

module.exports = Jobs
