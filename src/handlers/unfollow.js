const helpers = require('../helpers')

const unfollow = ({ repositories }) => async context => {
  const subject = helpers.removeCommand(context.update.message.text)
  
  const user = await repositories.user.getByTelegramId(context.update.message.from.id)

  if (!user.subjects.includes(subject)) {
    await context.reply(`Você não estava vigiando o assunto ${subject}`)
    context.reply('Veja todos os assuntos que você vigia com o comando "/subjects"')
  } else {
    await repositories.user.removeSubject(user._id, subject)
    context.reply(`Feito! Deixei de vigiar o assunto ${subject} para você.`)
  }
}

module.exports = unfollow
