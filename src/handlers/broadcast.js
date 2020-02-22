const broadcast = ({ repositories, bot }) => async context => {
  const { step } = context.session

  if (!step) {
    context.reply('Que mensagem você deseja enviar para todos os usuários?')

    context.session.handler = 'broadcast'
    context.session.step = 2
  } else if (step === 2) {
    try {
      const users = await repositories.user.getAll()

      const message = context.update.message.text

      users.forEach(user => {
        bot.telegram.sendMessage(user.telegram.id, message)
      })

      context.reply('Entendido! Transmitirei essa mensagem para todos os nossos usuários.')
    } catch (error) {
      throw new Error(error)
    }

    context.session.handler = undefined
    context.session.step = undefined
  }
}

module.exports = broadcast
