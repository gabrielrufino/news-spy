const helpers = require('../helpers')

const spy = ({ repositories }) => context => {
  const expression = helpers.removeCommand(context.message.text)

  const userId = context.from.id
  repositories.user.follow(userId, expression)

  context.reply(`Deixe comigo! Eu vou espionar notícias relacionadas à ${expression} para você.`)
}

module.exports = spy
