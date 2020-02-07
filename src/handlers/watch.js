const helpers = require('../helpers')

const watch = ({ repositories }) => context => {
  const expression = helpers.removeCommand(context.message.text)

  if (!expression) {
    context.reply('Você especificar um assunto para ser vigiado. Por exemplo: "/vigiar [assunto]"')
  } else {
    const userId = context.state.user_id
    repositories.user.pushSubject(userId, expression)

    context.reply(`Deixe comigo! Eu vou vigiar notícias relacionadas à ${expression} para você.`)
  }
}

module.exports = watch
