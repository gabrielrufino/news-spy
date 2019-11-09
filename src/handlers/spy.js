const helpers = require('../helpers')
const user = require('../repositories/user')

const spy = context => {
  const expression = helpers.removeCommand(context.message.text)

  const userId = context.from.id
  user.follow(userId, expression)

  context.reply(`Deixe comigo! Eu vou espionar notícias relacionadas à ${expression} para você.`)
}

module.exports = spy
