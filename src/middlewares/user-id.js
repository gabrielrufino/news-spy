const userId = ({ repositories }) => async (context, next) => {
  const { id } = context.message.from

  const { _id } = await repositories.user.getByTelegramId(id)
  context.state.user_id = _id

  next()
}

module.exports = userId
