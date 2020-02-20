const broadcast = require('./broadcast')
const direct = require('./direct')
const frequency = require('./frequency')
const start = require('./start')
const support = require('./support')
const watch = require('./watch')
const subjects = require('./subjects')
const unwatch = require('./unwatch')
const users = require('./users')

const router = [
  {
    command: 'vigiar',
    alternatives: ['watch'],
    description: 'Começa a vigiar um assunto especificado',
    handler: watch
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
    handler: unwatch
  },
  {
    command: 'frequencia',
    alternatives: ['frequency'],
    description: 'Define a frequência que o usuário deseja receber notícias',
    handler: frequency
  },
  {
    command: 'suporte',
    alternatives: ['support'],
    description: 'Obter ajuda ou reportar problema ao suporte',
    handler: support
  },
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
    admin: true,
    command: 'usuarios',
    alternatives: ['users'],
    description: 'Lista os usuários da base',
    handler: users
  },
  {
    command: 'start',
    alternatives: ['iniciar'],
    description: 'Inicia conversa com o Bot',
    handler: start,
    hidden: true
  }
]

module.exports = router
