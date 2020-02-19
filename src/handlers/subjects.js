const sleep = require('sleep-promise')

const subjects = ({ repositories }) => async context => {
  const user = await repositories.user.getByTelegramId(context.update.message.from.id)

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
