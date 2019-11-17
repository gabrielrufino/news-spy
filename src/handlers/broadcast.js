const broadcast = ({ repositories, bot }) => async context => {
  try {
    const users = await repositories.user.getAll()

    const { argument: text } = context.state

    users.forEach(user => {
      bot.telegram.sendMessage(user.telegram.id, text)
    });
  
    context.reply('Deixa comigo')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = broadcast
