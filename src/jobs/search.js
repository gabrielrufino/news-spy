const dayjs = require('dayjs')

const search = (userId, { repositories, services }) => async () => {
  try {
    const user = await repositories.user.getById(userId)
    const urls = user.news.map(news => news.url)

    const { NEWS_API_TOKEN } = process.env

    user.subjects.forEach(async subject => {
      try {
        const { data } = await services.news.get('top-headlines', {
          params: {
            q: subject,
            from: dayjs().format('YYYY-MM-DD'),
            to: dayjs().format('YYYY-MM-DD'),
            apiKey: NEWS_API_TOKEN
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

module.exports = search
