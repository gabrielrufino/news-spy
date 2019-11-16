const spy = require('./spy')

const jobs = ({ repositories, bot, services }) => {
  spy({ repositories, bot, services })
}

module.exports = jobs
