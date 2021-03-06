const router = require('../handlers/router')

const commands = router
  .filter(({ admin, hidden }) => !admin && !hidden)
  .map(({ command, description }) => `${command} - ${description}`)

const output = commands.join('\n')

console.log(output)
