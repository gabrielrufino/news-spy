const sleep = require('sleep-promise')

const subjects = () => async context => {
  const user = context.state.user

  const response = user.subjects.map(subject => `- ${subject}\n`).join('')

  if (response) {
    context.reply(response)
  } else {
    await context.reply('No momento, você não vigia nenhuma notícia!')
    await sleep(1000)
    context.reply('Comece a vigiar com o comando "/vigiar [assunto]"')
  }
}

module.exports = subjects
