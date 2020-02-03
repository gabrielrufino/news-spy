const start = ({ repositories }) => async context => {
  repositories.user.createIfNotExists(context.from)

  const { first_name: firstName } = context.update.message.from

  await context.reply(`Olá, ${firstName}! Seja bem-vindo ao News Spy. Eu serei seu espião! 🗞🕵`)
  await context.reply('O meu trabalho é monitorar todas as notícias importantes sobre assuntos que te interessam')
  await context.reply('Comece agora mesmo. Pense em um assunto e envie para mim o seguinte comando: "/spy [assunto]"')
}

module.exports = start
