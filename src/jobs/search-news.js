const dayjs = require('dayjs')

const searchNews = (userId, { repositories, services }) => async () => {
  try {
    const user = await repositories.user.getById(userId)
    const urls = user.news.map(news => news.url)

    const { NEWS_API_TOKEN } = process.env

    const today = dayjs().format('YYYY-MM-DD')

    user.subjects.forEach(async subject => {
      try {
        const { data } = await services.news.get('top-headlines', {
          params: {
            apiKey: NEWS_API_TOKEN,
            q: subject,
            from: today,
            to: today
          }
        })

        const news = data.articles
          .filter(news => !urls.includes(news.url))
          .map(news => ({
            title: news.title,
            url: news.url,
            subject,
            sent: false
          }))

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
