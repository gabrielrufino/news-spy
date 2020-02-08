const send = (userId, { bot, repositories, services }) => async () => {
  try {
    const user = await repositories.user.getById(userId)

    const allNews = user.news
    const unsentNews = allNews.filter(({ sent }) => !sent)

    if (unsentNews.length > 0) {
      const algorithmiaInput = unsentNews.map(news => ({
        document: news.title,
        language: 'auto'
      }))

      const { result: newsWithSentiment } = await services.algorithmia
        .algo('nlp/SentimentAnalysis/1.0.5')
        .pipe(algorithmiaInput)

      newsWithSentiment.sort((newsA, newsB) => {
        const sentimentA = Math.abs(newsA.sentiment)
        const sentimentB = Math.abs(newsB.sentiment)
  
        return sentimentB - sentimentA
      })

      const mostImportantNews = newsWithSentiment[0]

      const news = allNews.find(news => news.title === mostImportantNews.document)
      const index = allNews.indexOf(news)

      bot.telegram.sendMessage(user.telegram.id, `${news.title}\n\n${news.url}`)
      repositories.user.setNewsAsSent(userId, index)
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = send
