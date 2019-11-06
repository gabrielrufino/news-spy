const db = require('../init/db')

let subjects

db()
  .then(db => {
    subjects = db.collection('subjects')
  })

const createIfNotExists = async expression => {
  try {
    const subject = await subjects.findOne({ expression })

    if (!subject) {
      await subjects.insert({
        expression,
        followers: []
      })
    }
  } catch (error) {
    throw new Error(erro)
  }
}

const list = async () => {
  try {
    return await subjects.find({}).toArray()
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createIfNotExists,
  list
}
