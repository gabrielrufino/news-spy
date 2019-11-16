const start = repositories => context => {
  repositories.user.createIfNotExists(context.from)

  context.reply('Bem-vindo ao News Spy!')
}

module.exports = start
