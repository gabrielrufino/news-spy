const sendNews = (userId, { bot, repositories, services }) => async () => {
  try {
    const user = await repositories.user.getById(userId)

    const allNews = user.news
    const unsentNews = allNews.filter(({ sent }) => !sent)

    if (unsentNews.length > 0) {
      const newsWithSentiment = await Promise.all(unsentNews.map(async news => {
        const [result] = await services
          .gcloud
          .language
          .analyzeSentiment({
            document: {
              content: news.title,
              type: 'PLAIN_TEXT',
            }
          })

        return {
          ...news,
          sentiment: result.documentSentiment.magnitude
        }
      }))

      newsWithSentiment.sort((newsA, newsB) => {
        const sentimentA = newsA.sentiment
        const sentimentB = newsB.sentiment

        return sentimentB - sentimentA
      })

      const mostImportantNews = newsWithSentiment[0]

      const news = allNews.find(news => news.title === mostImportantNews.title)
      const index = allNews.indexOf(news)

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

      repositories.user.setNewsAsSent(userId, index)
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = sendNews
