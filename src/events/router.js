const audio = require('./audio')
const callback = require('./callback')
const poll = require('./poll')
const text = require('./text')

const router = [
  {
    events: ['audio', 'voice'],
    listener: audio
  },
  {
    events: ['callback_query'],
    listener: callback
  },
  {
    events: ['poll'],
    listener: poll
  },
  {
    events: ['text'],
    listener: text
  }
]

module.exports = router
