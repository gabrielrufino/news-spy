const express = require('express')

const Api = ({ repositories }) => {
  const app = express()

  app.get('/', (_, response) => {
    response.json({
      alive: true
    })
  })

  app.post('/votes/:feature', async (request, response) => {
    const { feature } = request.params

    await repositories.votes.addVote(feature)

    response.status(204).end()
  })

  const { PORT } = process.env

  app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
  })
}

module.exports = Api
