const axios = require('axios')

const news = axios.create({
  baseURL: 'https://newsapi.org/v2/'
})

module.exports = news
