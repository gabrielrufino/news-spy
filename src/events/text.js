const text = async (context, next) => {
  const txt = context.update.message.text

  if (!txt.startsWith('/')) {
    await context.reply('Desculpe! Ainda não consigo entender textos que não são comandos.')
    context.reply('Estou trabalhando nisso.')
  } else {
    next()
  }
}

module.exports = text
