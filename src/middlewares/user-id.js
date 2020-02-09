const userId = ({ repositories }) => async (context, next) => {
  const { message } = context.update
  
  if (message) {
    const { id } = message.from

    const user = await repositories.user.getByTelegramId(id)
    if (user) {
      context.state.user_id = user._id
    }
  }


  next()
}

module.exports = userId
