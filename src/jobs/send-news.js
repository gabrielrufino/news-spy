const sendNews = (userId, { bot, repositories, services }) => async () => {
  try {
    const user = await repositories.user.getById(userId)

    const allNews = user.news
    const unsentNews = allNews.filter(({ sent }) => !sent)

    if (unsentNews.length > 0) {
      unsentNews.sort((newsA, newsB) => {
        const sentimentA = newsA.sentiment
        const sentimentB = newsB.sentiment

        return sentimentB - sentimentA
      })

      const mostImportantNews = unsentNews[0]

      const news = allNews.find(news => news.title === mostImportantNews.title)
      const indexes = allNews
        .map(({url}, index) => ({ url, index }))
        .filter(n => n.url === news.url)

      await bot.telegram.sendMessage(user.telegram.id, `${news.title}\n\n${news.url}`, {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '👎',
                callback_data: JSON.stringify({
                  feedback: 'deslike',
                  news_id: news.id
                })
              },
              {
                text: '👍',
                callback_data: JSON.stringify({
                  feedback: 'like',
                  news_id: news.id
                })
              }
            ]
          ]
        }
      })

      indexes.forEach(({ index }) => {
        repositories.user.setNewsAsSent(userId, index)
      })
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = sendNews
