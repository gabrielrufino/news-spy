const Services = () => {
  const algorithmia = require('./algorithmia')
  const gcloud = require('./google-cloud')
  const news = require('./news')

  return {
    algorithmia,
    gcloud,
    news
  }
}

module.exports = Services
