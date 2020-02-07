const express = require('express')

const api = () => {
  const app = express()
  
  app.get('/', (_, response) => {
    response.json({
      alive: true
    })
  })
  
  const { PORT } = process.env
  
  app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
  })
}

module.exports = api
