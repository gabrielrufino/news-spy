const callback = context => {
  console.log(context.update.callback_query.message)
  context.editMessageReplyMarkup({ inline_keyboard: [] })
}

module.exports = callback
