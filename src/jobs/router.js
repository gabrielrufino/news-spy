const clearNews = require('./clear-news')
const searchNews = require('./search-news')
const sendNews = require('./send-news')
const sendNote = require('./send-note')

const router = [
  {
    name: 'Limpar notícias',
    handler: clearNews,
    cronTime: '0 0 0 * * *'
  },
  {
    name: 'Buscar notícias',
    handler: searchNews,
    cronTime: '0 0 7,10,12,15,18,21 * * *',
    onePerUser: true
  },
  {
    name: 'Enviar notícia',
    handler: sendNews,
    cronTime: '0 0 * * * *',
    onePerUser: true
  },
  ...sendNote.notes.map(note => ({
    name: note.description,
    handler: sendNote.sender(note),
    cronTime: note.cronTime
  }))
]

module.exports = router
