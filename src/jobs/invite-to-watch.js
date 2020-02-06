const inviteToWatch = ({ bot, repositories }) => async () => {
  const cursor = await repositories.user.getAll({ subjects: { $size: 0 } })

  cursor.forEach(async user => {
    await bot.telegram.sendMessage(user.telegram.id, 'Identificamos que você não está vigiando nenhum assunto.')
    await bot.telegram.sendMessage(user.telegram.id, 'Eu sou capaz de enviar notícias sobre assuntos que intessam a você em ordem de relevância.')
    bot.telegram.sendMessage(user.telegram.id, 'Para vigiar um assunto me envie o comando "/vigiar [assunto]" ou envie o comando "/inativar" para eu que pare de incomodar.')
  })
}

module.exports = inviteToWatch
