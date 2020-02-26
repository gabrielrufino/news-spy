const sleep = require('sleep-promise')

const start = ({ repositories, jobs }) => async context => {
  const count = await repositories.user.countUsers()

  if (count < 20 || context.state.user) {
    const result = await repositories.user.createIfNotExists(context.from)

    const { first_name: firstName } = context.update.message.from

    if (result) {
      const { ops: [user] } = result

      jobs.initUser(user._id)

      await context.reply(`Olá, ${firstName}! Esse é o News Spy e eu serei seu espião! 🗞🕵`)
      await sleep(2000)
      await context.reply('O meu trabalho é vigiar todas as notícias importantes sobre assuntos que te interessam')
      await sleep(2200)
      await context.reply('Comece agora mesmo. Pense em um assunto e me envie o comando /vigiar')
    } else {
      context.reply(`Olá, ${firstName}! Você não precisa mais desse comando. Já é um dos nossos!`)
    }
  } else {
    context.reply('Desculpe! Atingimos o nosso número máximo de usuários. Estamos expandindo e avisaremos quando estivermos com mais espaço.')
  }
}

module.exports = start
