const sleep = require('sleep-promise')

const subjects = () => async context => {
  const user = context.state.user

  const response = user.subjects.map(subject => `- ${subject}\n`).join('')

  if (response) {
    context.reply(response)
  } else {
    await context.reply('No momento, você não vigia nenhum assunto!')
    await sleep(1200)
    context.reply('Comece a vigiar me enviando o comando /vigiar')
  }
}

module.exports = subjects
