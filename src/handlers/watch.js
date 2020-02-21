const watch = ({ repositories }) => context => {
  const { step } = context.session

  switch (step) {
    case 2:
      const subject = context.message.text

      const user = context.state.user
      repositories.user.pushSubject(user._id, subject)

      context.reply(`Deixe comigo! Eu vou vigiar notícias relacionadas à ${subject} para você.`)
      context.session.handler = undefined
      context.session.step = undefined
      break
    default:
      context.session.handler = 'watch'
      context.session.step = 2
      context.reply('Me envie o assunto que você deseja vigiar.')
  }
}

module.exports = watch
