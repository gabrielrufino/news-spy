const sleep = require('sleep-promise')

const text = ({ handlers }) => async (context, next) => {
  const txt = context.update.message.text

  if (!txt.startsWith('/')) {
    const { handler } = context.session

    if (handler) {
      handlers[handler](context)
    } else {
      try {
        await context.reply('Desculpe! Ainda não consigo entender textos que não são comandos.')
        await sleep(1500)
        context.reply('Estou trabalhando nisso.')
      } catch (error) {
        console.error('Houve um erro ao enviar mensagem')
      }
    }
  } else {
    next()
  }
}

module.exports = text
