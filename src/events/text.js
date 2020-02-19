const text = async (context, next) => {
  const txt = context.update.message.text

  if (!txt.startsWith('/')) {
    try {
      await context.reply('Desculpe! Ainda não consigo entender textos que não são comandos.')
      context.reply('Estou trabalhando nisso.')
    } catch (error) {
      console.error('Houve um erro ao enviar mensagem')
    }
  } else {
    next()
  }
}

module.exports = text
