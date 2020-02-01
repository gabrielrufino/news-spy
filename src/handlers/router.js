const broadcast = require('./broadcast')
const frequency = require('./frequency')
const search = require('./search')
const start = require('./start')
const spy = require('./spy')

const router = [
  {
    command: 'broadcast',
    description: 'Transmite uma mensagem para todos os usário do bot',
    handler: broadcast,
    secret: true
  },
  {
    command: 'frequency',
    description: 'Define a frequência que o usuário deseja receber notícias',
    handler: frequency
  },
  {
    command: 'search',
    description: 'Busca por notícias de um tema específico',
    handler: search
  },
  {
    command: 'start',
    description: 'Inicia conversa com o Bot',
    handler: start
  },
  {
    command: 'spy',
    description: 'Começa a espionar um tema especificado',
    handler: spy
  }
]

module.exports = router
