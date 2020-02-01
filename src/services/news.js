const axios = require('axios')

const { NEWS_API_TOKEN } = process.env

const news = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  params: {
    apiKey: NEWS_API_TOKEN
  }
})

module.exports = news
