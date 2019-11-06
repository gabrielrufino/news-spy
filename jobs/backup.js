const cron = require('cron')
const fs = require('fs')

const backup = new cron.CronJob('0 * * * * *', () => {
  fs.copyFile('db.json', 'backup.json', () => {
    console.log('Backup realizado!')
  })
})

module.exports = backup
