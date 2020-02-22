const helpers = require('../helpers')

const unwatch = ({ repositories }) => async context => {
  const subject = helpers.removeCommand(context.update.message.text)

  if (!subject) {
    context.reply('Você precisar me dizer o assunto que quer parar de vigiar. Por exemplo: "/deixar [assunto]"')
  } else {
    const user = context.state.user

    if (!user.subjects.includes(subject)) {
      await context.reply(`Você não estava vigiando o assunto ${subject}`)
      context.reply('Veja todos os assuntos que você vigia com o comando "/subjects"')
    } else {
      await repositories.user.removeSubject(user._id, subject)
      context.reply(`Feito! Deixei de vigiar o assunto ${subject} para você.`)
    }
  }
}

module.exports = unwatch
