const audio = require('./audio')

const router = [
  {
    events: ['audio', 'voice'],
    handler: audio
  }
]

module.exports = router
