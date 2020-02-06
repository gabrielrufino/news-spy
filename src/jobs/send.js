const send = (userId, { repositories, bot }) => async () => {
  try {
    const user = await repositories.user.getById(userId)

    const news = user.news.filter(({ sent }) => !sent)[0]

    if (news) {
      const index = user.news.indexOf(news)

      bot.telegram.sendMessage(user.telegram.id, `${news.title}\n\n${news.url}`)
      repositories.user.setNewsAsSent(userId, index)
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = send
