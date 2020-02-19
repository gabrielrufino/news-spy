const audio = require('./audio')
const callback = require('./callback')
const poll = require('./poll')
const text = require('./text')

const router = [
  {
    events: ['audio', 'voice'],
    handler: audio
  },
  {
    events: ['callback_query'],
    handler: callback
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
