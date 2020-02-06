const helpers = require('../helpers')

const direct = ({ bot, repositories }) => async context => {
  const text = helpers.removeCommand(context.message.text)

  const [username, ...message] = text.split(' ')

  try {
    const { telegram: { id } } = await repositories.user.getByTelegramUsername(username)

    bot.telegram.sendMessage(id, message.join(' '))
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = direct
