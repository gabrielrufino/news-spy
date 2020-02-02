const registerMessage = ({ repositories }) => async (context, next) => {
  const { user_id: userId } = context.state
  if (userId) {
    const { date, message_id: messageId, text } = context.update.message

    const message = {
      date,
      message_id: messageId,
      text
    }

    await repositories.user.pushMessage(userId, message)
  }

  next()
}

module.exports = registerMessage
