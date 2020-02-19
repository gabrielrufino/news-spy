const sleep = require('sleep-promise')

const support = ({ repositories }) => async context => {
  const cursor = await repositories.user.getAll({ admin: true })

  const admins = await cursor.toArray()
  const adminsTelegram = admins.map(admin => {
    const {
      telegram: {
        first_name: firstName,
        last_name: lastName,
        username
      }
    } = admin

    return `${firstName} ${lastName} - @${username}`
  }).join('\n')

  await context.reply('Precisa de ajuda ou quer reportar um problema?')
  await sleep(1000)

  context.reply(`Fale com um dos nossos administradores:\n\n${adminsTelegram}`)
}

module.exports = support
