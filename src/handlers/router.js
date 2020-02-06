const broadcast = require('./broadcast')
const direct = require('./direct')
const frequency = require('./frequency')
const search = require('./search')
const start = require('./start')
const spy = require('./spy')
const subjects = require('./subjects')
const unfollow = require('./unfollow')
const users = require('./users')

const router = [
  {
    admin: true,
    command: 'transmitir',
    alternatives: ['broadcast'],
    description: 'Transmite uma mensagem para todos os usário do bot',
    handler: broadcast
  },
  {
    admin: true,
    command: 'enviar',
    alternatives: ['direct'],
    description: 'Envia uma mensagem direta para um usuário',
    handler: direct
  },
  {
    command: 'frequencia',
    alternatives: ['frequency'],
    description: 'Define a frequência que o usuário deseja receber notícias',
    handler: frequency
  },
  {
    command: 'buscar',
    alternatives: ['search'],
    description: 'Busca por notícias de um tema específico',
    handler: search
  },
  {
    command: 'start',
    alternatives: ['iniciar'],
    description: 'Inicia conversa com o Bot',
    handler: start
  },
  {
    command: 'vigiar',
    alternatives: ['watch'],
    description: 'Começa a vigiar um assunto especificado',
    handler: spy
  },
  {
    command: 'vigiados',
    alternatives: ['assuntos', 'subjects', 'watched'],
    description: 'Lista todos os assuntos vigiados',
    handler: subjects
  },
  {
    command: 'deixar',
    alternatives: ['unwatch'],
    description: 'Deixa de vigiar um assunto especificado',
    handler: unfollow
  },
  {
    admin: true,
    command: 'usuarios',
    alternatives: ['users'],
    description: 'Lista os usuários da base',
    handler: users
  }
]

module.exports = router
