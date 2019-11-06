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
    throw new Error(error)
  }
}

const addFollower = async (follower, expression) => {
  try {
    await subjects.updateOne(
      {
        expression
      },
      {
        $push: {
          followers: follower
        }
      }
    )
  } catch (error) {
    throw new Error(error)
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
  addFollower,
  list
}
