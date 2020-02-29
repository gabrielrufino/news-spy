const checkActive = (context, next) => {
  const { active } = context.state.user

  if (active || (context.message.text && ['/ativar', '/desativar'].includes(context.message.text))) {
    next()
  } else {
    context.reply('Identificamos que você desativou os nossos serviços. Envie o comando /ativar para voltar')
  }
}

module.exports = checkActive
