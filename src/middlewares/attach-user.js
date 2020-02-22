const userId = ({ repositories }) => async (context, next) => {
  const { updateType, update } = context

  if (updateType === 'message') {
    const { id } = update.message.from

    const user = await repositories.user.getByTelegramId(id)
    if (user) {
      context.state.user = user
    }
  } else if (updateType === 'callback_query') {
    const { id } = update.callback_query.from

    const user = await repositories.user.getByTelegramId(id)
    if (user) {
      context.state.user = user
    }
  }

  next()
}

module.exports = userId
