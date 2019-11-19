const { ObjectID } = require('mongodb')

module.exports = db => {
  const users = db.collection('users')

  const getAll = async () => {
    try {
      return await users.find()
    } catch (error) {
      throw new Error(error)
    }
  }

  const getByTelegramId = async id => {
    try {
      const user = await users.findOne({ 'telegram.id': id })

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  const getByTelegramUsername = async username => {
    try {
      const user = await users.findOne({ 'telegram.username': username })

      return user
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
          },
          subjects: []
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

  const pushSubject = async (id, subject) => {
    try {
      await users.updateOne(
        { _id: ObjectID(id) },
        { $push: { subjects: subject } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    getAll,
    getByTelegramId,
    getByTelegramUsername,
    createIfNotExists,
    updateField,
    pushSubject
  }
}
