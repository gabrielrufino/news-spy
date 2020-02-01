const router = require('../handlers/router')

const commands = router
  .filter(({ secret }) => !secret)
  .map(({ command, description }) => `${command} - ${description}`)

const output = commands.join('\n')

console.log(output)
