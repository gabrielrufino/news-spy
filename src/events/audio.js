const sleep = require('sleep-promise')

const audio = () => async context => {
  await context.reply('Desculpe! Ainda não consigo entender áudios.')
  await sleep(1000)
  context.reply('Estou trabalhando nisso.')
}

module.exports = audio
