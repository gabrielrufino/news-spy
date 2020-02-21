const start = ({ repositories, jobs }) => async context => {
  const result = await repositories.user.createIfNotExists(context.from)

  const { first_name: firstName } = context.update.message.from

  if (result) {
    const { ops: [user] } = result

    jobs.initUser(user._id)

    await context.reply(`Olá, ${firstName}! Seja bem-vindo ao News Spy. Eu serei seu espião! 🗞🕵`)
    await context.reply('O meu trabalho é vigiar todas as notícias importantes sobre assuntos que te interessam')
    await context.reply('Comece agora mesmo. Pense em um assunto e envie para mim o seguinte comando: "/vigiar [assunto]"')
  } else {
    context.reply(`Olá, ${firstName}! Você não precisa mais desse comando. Já é um dos nossos!`)
  }
}

module.exports = start
