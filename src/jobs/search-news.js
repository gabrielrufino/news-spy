const dayjs = require('dayjs')

const searchNews = (userId, { repositories, services }) => async () => {
  try {
    const user = await repositories.user.getById(userId)
    const urls = user.news.map(news => news.url)

    const { NEWS_API_TOKEN } = process.env

    const today = dayjs().format('YYYY-MM-DD')

    user.subjects.forEach(async subject => {
      try {
        const { data } = await services.news.get('everything', {
          params: {
            apiKey: NEWS_API_TOKEN,
            q: subject,
            from: today,
            to: today,
            language: user.settings.news_languages.join(','),
            sortBy: 'relevancy'
          }
        })

        const news = await Promise.all(data.articles
          .filter(news => !urls.includes(news.url))
          .map(async news => {
            const [result] = await services
              .gcloud
              .language
              .analyzeSentiment({
                document: {
                  content: news.title,
                  type: 'PLAIN_TEXT'
                }
              })

            return {
              title: news.title,
              url: news.url,
              subject,
              sent: false,
              sentiment: result.documentSentiment.magnitude
            }
          })
        )

        repositories.user.pushNews(userId, news)
      } catch (error) {
        throw new Error(error)
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = searchNews
