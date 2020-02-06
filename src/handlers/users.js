const users = ({ repositories }) => async context => {
  const cursor = await repositories.user.getAll()

  cursor.forEach(({ telegram: { id, first_name: firstName, username } }) => {
    context.reply(`ID: ${id}\nNome: ${firstName}\nUsername: ${username}`)
  })
}

module.exports = users
