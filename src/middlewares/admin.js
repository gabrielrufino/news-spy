const admin = ({ repositories }) => async (context, next) => {
  const {
    message: {
      from: {
        id
      }
    },
    state: {
      command
    }
  } = context

  const protectedCommands = [
    'broadcast'
  ]

  if (command && protectedCommands.includes(command)) {
    const admin = await repositories.admin.getByTelegramId(id)

    if (admin) {
      next()
    }
  }
}

module.exports = admin
