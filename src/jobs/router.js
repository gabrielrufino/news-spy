const clearNews = require('./clear-news')
const inviteToWatch = require('./invite-to-watch')
const search = require('./search')
const send = require('./send')

const router = [
  {
    name: 'Limpar notícias',
    handler: clearNews,
    cronTime: '0 0 0 * * *'
  },
  {
    name: 'Buscar notícias',
    handler: search,
    cronTime: '0 0 7,10,12,15,18,21 * * *',
    onePerUser: true
  },
  {
    name: 'Enviar notícia',
    handler: send,
    cronTime: '0 0 * * * *',
    onePerUser: true
  },
  {
    name: 'Convidar para vigiar algum assunto',
    handler: inviteToWatch,
    cronTime: '0 0 15 * * 1'
  }
]

module.exports = router
