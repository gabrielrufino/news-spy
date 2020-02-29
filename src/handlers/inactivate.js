const inactivate = ({ repositories }) => async context => {
  const { _id, active } = context.state.user

  if (active) {
    await repositories.user.setInactive(_id)

    await context.reply('Ok! O News Spy foi desativado e não enviaremos mais notícias.')
    context.reply('Você pode voltar a usar nosso serviço com o comando /ativar')
  } else {
    await context.reply('O News Spy já está desativado para você!')
    context.reply('Mas, você pode voltar a usar nossos serviços com o comando /ativar')
  }
}

module.exports = inactivate
