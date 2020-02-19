const callback = () =>  context => {
  context.editMessageReplyMarkup({ inline_keyboard: [] })
}

module.exports = callback
