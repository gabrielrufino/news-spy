const sleep = require('sleep-promise')

const watch = ({ repositories }) => async context => {
  const { step } = context.session

  if (!step) {
    const { subjects } = context.state.user

    if (subjects.length < 4) {
      context.session.handler = 'watch'
      context.session.step = 2
      context.reply('Que assunto você deseja vigiar?')
    } else {
      await context.reply('Você pode vigiar até 4 assuntos.')
      await sleep(1000)
      context.reply('Deixe de vigiar algum assunto para pode vigiar um outro assunto. Para isso, use o comando /deixar')
    }
  } else if (step === 2) {
    const subject = context.message.text

    const user = context.state.user
    repositories.user.pushSubject(user._id, subject)

    context.reply(`Deixe comigo! Eu vou vigiar notícias relacionadas à ${subject} para você.`)
    context.session.handler = undefined
    context.session.step = undefined
  }
}

module.exports = watch
