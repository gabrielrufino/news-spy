const app = require('./src')
const init = require('./init')

init()
  .then(app)
  .catch(error => {
    throw error
  })
