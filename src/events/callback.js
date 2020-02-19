const callback = ({ repositories }) => async context => {
  const { from: { id }, data } = context.callbackQuery
  const payload = JSON.parse(data)

  try {
    const user = await repositories.user.getByTelegramId(id)

    const news = await repositories.user.getNewsById(user._id, payload.news_id)

    const feedback = {
      feedback: payload.feedback,
      news
    }

    await repositories.user.pushFeedback(user._id, feedback)
    context.editMessageReplyMarkup({ inline_keyboard: [] })
  } catch (error) {
    console.error(error)
    context.reply('Tivemos um erro inesperado!')
  }
}

module.exports = callback
