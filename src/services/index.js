const Services = () => {
  const algorithmia = require('./algorithmia')
  const news = require('./news')

  return {
    algorithmia,
    news
  }
}

module.exports = Services
