const subjects = ({ repositories }) => async context => {
  const user = await repositories.user.getByTelegramId(context.update.message.from.id)

  const response = user.subjects.map(subject => `- ${subject}\n`).join('')
  context.reply(response)
}

module.exports = subjects
