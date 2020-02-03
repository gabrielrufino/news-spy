const Algorithmia = require('algorithmia')

const { ALGORITHMIA_API_KEY } = process.env

module.exports = Algorithmia.client(ALGORITHMIA_API_KEY)
