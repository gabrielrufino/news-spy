const user = require('../repositories/user')

const start = context => {
  user.createIfNotExists(context.from)

  context.reply('Bem-vindo ao News Spy!')
}

module.exports = start
