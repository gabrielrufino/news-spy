const extractCommand = require('../helpers/extract-command')
const removeCommand = require('../helpers/remove-command')

const command = (context, next) => {
  const { text } = context.message

  if (text.startsWith('/')) {
    context.state.command = extractCommand(text)
    context.state.argument = removeCommand(text)
  }

  next()
}

module.exports = command
