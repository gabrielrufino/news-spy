const direct = ({ bot, repositories }) => async context => {
  const { session: { step }, message: { text: argument } } = context

  if (!step) {
    context.session.handler = 'direct'
    context.session.step = 2

    context.reply('Para que usuário você deseja enviar essa mensagem direta?')
  } else if (step === 2) {
    const username = argument

    const user = await repositories.user.getByTelegramUsername(username)

    if (user) {
      context.session.user = user
      context.session.step = 3
  
      context.reply(`Que mensagem você deseja enviar para ${username}?`)
    } else {
      context.reply(`Usuário de username ${username} não encontrado.`)
    }
  } else if (step === 3) {
    const message = argument
    const { telegram: { id, first_name: firstName } } = context.session.user

    await bot.telegram.sendMessage(id, message)
    context.reply(`Mensagem direta enviada para ${firstName}.`)

    context.session.handler = undefined
    context.session.user = undefined
    context.session.step = undefined
  }
}

module.exports = direct
