const spy = require('./spy')

const jobs = ({ repositories, bot }) => {
  spy({ repositories, bot })
}

module.exports = jobs
