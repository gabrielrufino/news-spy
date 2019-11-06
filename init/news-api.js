const axios = require('axios')

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2/'
})

module.exports = newsApi
