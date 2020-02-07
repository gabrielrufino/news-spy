const audio = require('./audio')
const text = require('./text')

const router = [
  {
    events: ['audio', 'voice'],
    handler: audio
  },
  {
    events: ['text'],
    handler: text
  }
]

module.exports = router
