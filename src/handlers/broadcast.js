const broadcast = ({ repositories, bot }) => async context => {
  try {
    const users = await repositories.user.getAll()

    const { argument: text } = context.state

    if (!text) {
      context.reply('A trasmissão precisa de uma mensagem. Use da seguinte forma: "/transmitir [mensagem]"')
    } else {
      users.forEach(user => {
        bot.telegram.sendMessage(user.telegram.id, text)
      })
  
      context.reply('Transmitirei essa mensagem para todos os nossos usuários.')
    }

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = broadcast
