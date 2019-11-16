const repositories = require('../src/repositories')

module.exports = db => {
  return repositories(db)
}
