const dotenv = require('dotenv')

const env = dotenv.config()

if (env.error) {
  throw new Error(env.error)
}

module.exports = env
