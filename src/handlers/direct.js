const helpers = require('../helpers')

const direct = ({ bot, repositories }) => async context => {
  const text = helpers.removeCommand(context.message.text)

  const [username, ...message] = text.split(' ')

  if (!username || message.length === 0) {
    await context.reply('Um username e uma mensagem são obrigatórios! 🤨 Use esse comando da seguinte forma: ')
    context.reply('/direct [username] [Mensagem que você deseja enviar]')
  } else {
    try {
      const user = await repositories.user.getByTelegramUsername(username)

      if (user) {
        const { id, first_name: firstName } = user.telegram

        await bot.telegram.sendMessage(id, message.join(' '))
        context.reply(`Mensagem direta enviada para ${firstName}.`)
      } else {
        context.reply(`Usuário com username ${username} não encontrado! 🚫`)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = direct
