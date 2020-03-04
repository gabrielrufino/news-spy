const registerMessage = ({ repositories }) => async (context, next) => {
  const { user } = context.state

  if (user && context.update.message) {
    const { date, from, message_id: messageId, text } = context.update.message

    const message = {
      date,
      from,
      message_id: messageId,
      text
    }

    await repositories.user.pushMessage(user._id, message)
  }

  next()
}

module.exports = registerMessage
