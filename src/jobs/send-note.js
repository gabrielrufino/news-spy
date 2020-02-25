const notes = [
  {
    description: 'Convida usuário que não vigiam nenhum assunto à começar!',
    cronTime: '0 0 15 * * 1',
    filter: { subjects: { $size: 0 } },
    messages: [
      'Identificamos que você não está vigiando nenhum assunto',
      'Eu sou capaz de enviar notícias sobre assuntos que intessam a você em ordem de relevância',
      'Para vigiar um assunto me envie o comando /vigiar'
    ]
  }
]

const sender = note => ({ bot, repositories }) => async () => {
  const cursor = await repositories.user.getAll(note.filter)

  cursor.forEach(user => {
    note.messages.forEach(async message => {
      await bot.telegram.sendMessage(user.telegram.id, message)
    })
  })
}

module.exports = {
  notes,
  sender
}
