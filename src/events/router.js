const audio = require('./audio')
const poll = require('./poll')
const text = require('./text')

const router = [
  {
    events: ['audio', 'voice'],
    handler: audio
  },
  {
    events: ['poll'],
    handler: poll
  },
  {
    events: ['text'],
    handler: text
  }
]

module.exports = router
