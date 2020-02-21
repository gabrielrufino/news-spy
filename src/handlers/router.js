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
    name: 'watch',
    command: 'vigiar',
    alternatives: ['watch'],
    description: 'Começa a vigiar um assunto especificado',
    handler: watch
  },
  {
    name: 'watched',
    command: 'vigiados',
    alternatives: ['assuntos', 'subjects', 'watched'],
    description: 'Lista todos os assuntos vigiados',
    handler: subjects
  },
  {
    name: 'unwatch',
    command: 'deixar',
    alternatives: ['unwatch'],
    description: 'Deixa de vigiar um assunto especificado',
    handler: unwatch
  },
  {
    name: 'frequency',
    command: 'frequencia',
    alternatives: ['frequency'],
    description: 'Define a frequência que o usuário deseja receber notícias',
    handler: frequency
  },
  {
    name: 'support',
    command: 'suporte',
    alternatives: ['support'],
    description: 'Obter ajuda ou reportar problema ao suporte',
    handler: support
  },
  {
    name: 'broadcast',
    admin: true,
    command: 'transmitir',
    alternatives: ['broadcast'],
    description: 'Transmite uma mensagem para todos os usário do bot',
    handler: broadcast
  },
  {
    name: 'direct',
    admin: true,
    command: 'enviar',
    alternatives: ['direct'],
    description: 'Envia uma mensagem direta para um usuário',
    handler: direct
  },
  {
    name: 'users',
    admin: true,
    command: 'usuarios',
    alternatives: ['users'],
    description: 'Lista os usuários da base',
    handler: users
  },
  {
    name: 'start',
    command: 'start',
    alternatives: ['iniciar'],
    description: 'Inicia conversa com o Bot',
    handler: start,
    hidden: true
  }
]

module.exports = router
