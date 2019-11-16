const dotenv = require('dotenv')

const env = dotenv.config()

if (env.error) {
  throw new Error(error)
}

module.exports = env
