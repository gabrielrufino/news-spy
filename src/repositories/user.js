module.exports = db => {
  const subject = require('./subject')(db)
  const users = db.collection('users')

  const getAll = async () => {
    try {
      return await users.find()
    } catch (error) {
      throw new Error(error)
    }
  }

  const createIfNotExists = async data => {
    try {
      const user = await users.findOne({ 'telegram.id': data.id })

      if (!user) {
        await users.insertOne({
          telegram: {
            id: data.id,
            is_bot: data.is_bot,
            first_name: data.first_name,
            last_name: data.last_name,
            username: 'gabrielrufino',
            language_code: 'en'
          },
          settings: {
            frequency: 'every-hour'
          }
        })
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  const updateField = async (id, field, value) => {
    try {
      await users.updateOne(
        { 'telegram.id': id },
        { $set: { [field]: value } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  const follow = async (follower, expression) => {
    try {
      await subject.createIfNotExists(expression)
      return await subject.addFollower(follower, expression)
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    getAll,
    createIfNotExists,
    updateField,
    follow
  }
}
