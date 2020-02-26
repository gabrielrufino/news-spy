const help = () => {
  const router = require('./router')

  const commands = router
    .filter(({ admin, hidden }) => !admin && !hidden)
    .map(({ command, description }) => `/${command} - ${description}`)
    .join('\n\n')
  
  const text = `
*Todos os comandos*

${commands}

*Dúvidas frequentes*

- _Como começar a receber notícias?_

1º Envie o comando /vigiar
2º Envie o assunto que deseja vigiar

- _Como parar de vigiar um assunto?_

1º Envie o comando /deixar
2º Envie o assunto que deseja parar de vigiar

- _Outro dúvida?_

1º Envie o comando /suporte
2º Fale com um dos nossos administradores
`

  return context => {
    context.replyWithMarkdown(text)
  }
}

module.exports = help
