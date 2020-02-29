const activate = ({ repositories }) => async context => {
  const { _id, active } = context.state.user

  if (!active) {
    await repositories.user.setActive(_id)

    context.reply('Bem vindo de volta! Reativamos o serviço para você.')
  } else {
    context.reply('O News Spy já está ativado para você!')
  }
}

module.exports = activate
