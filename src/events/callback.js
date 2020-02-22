const callback = ({ repositories }) => async context => {
  const { data } = context.callbackQuery
  const payload = JSON.parse(data)

  try {
    const user = context.state.user

    const news = await repositories.user.getNewsById(user._id, payload.news_id)

    if (news) {
      const feedback = {
        feedback: payload.feedback,
        news
      }

      await repositories.user.pushFeedback(user._id, feedback)
    }

    context.editMessageReplyMarkup({ inline_keyboard: [] })
  } catch (error) {
    console.error(error)
    context.reply('Tivemos um erro inesperado. Tente novamente mais tarde ou entre em contato com nosso suporte!')
  }
}

module.exports = callback
