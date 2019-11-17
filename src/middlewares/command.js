const extractCommand = require('../helpers/extract-command')

const command = (context, next) => {
  const { text } = context.message

  if (text.startsWith('/')) {
    context.state.command = extractCommand(text)
  }

  next()
}

module.exports = command
