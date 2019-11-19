const helpers = require('../helpers')

const spy = ({ repositories }) => context => {
  const expression = helpers.removeCommand(context.message.text)

  const userId = context.state.user_id
  repositories.user.pushSubject(userId, expression)

  context.reply(`Deixe comigo! Eu vou espionar notícias relacionadas à ${expression} para você.`)
}

module.exports = spy
