const unwatch = ({ repositories }) => async context => {
  const { step } = context.session

  if (!step) {
    context.session.handler = 'unwatch'
    context.session.step = 2

    context.reply('Que assunto você deseja deixar de vigiar?')
  } else if (step === 2) {
    const subject = context.update.message.text
    const user = context.state.user

    if (!user.subjects.includes(subject)) {
      await context.reply(`Você não estava vigiando o assunto ${subject}`)
      context.reply('Veja todos os assuntos que você vigia com o comando "/vigiados"')
    } else {
      await repositories.user.removeSubject(user._id, subject)
      context.reply(`Feito! Deixei de vigiar o assunto ${subject} para você.`)
    }

    context.session.handler = undefined
    context.session.step = undefined
  }
}

module.exports = unwatch
