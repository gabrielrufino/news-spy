const helpers = require('../helpers')

const frequency = ({ repositories }) => async context => {
  const { message: { text }, from: { id } } = context
  const f = helpers.removeCommand(text)

  if (!f) {
    context.reply('Você precisa informar a frequência. Use da seguinte forma: "/frequencia [frequencia]"')
  } else {
    if (!['every-hour', 'every-day', 'every-week'].includes(f)) {
      return context.reply('Frequência inválida!')
    }
  
    try {
      await repositories.user.updateField(id, 'settings.frequency', f)
  
      context.reply('Ok! Nós alteramos sua frequência.')
    } catch (error) {
      context.reply('Tivemos um erro inesperado :(')
      throw new Error(error)
    }
  }
}

module.exports = frequency
