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

  const getById = async id => {
    try {
      return await users.findOne({ _id: ObjectID(id) })
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
            username: data.username,
            language_code: 'en'
          },
          settings: {
            frequency: 'every-hour'
          },
          subjects: [],
          messages: [],
          news: []
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
        { $addToSet: { subjects: subject } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  const pushMessage = async (id, message) => {
    try {
      await users.updateOne(
        { _id: ObjectID(id) },
        { $push: { messages: message } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  const pushNews = async (id, news) => {
    try {
      await users.updateOne(
        { _id: ObjectID(id) },
        { $push: { news: Array.isArray(news) ? { $each: news } : news } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  const setNewsAsSent = async (id, position) => {
    const key = `news.${position}.sent`

    try {
      await users.updateOne(
        { _id: ObjectID(id) },
        { $set: { [key]: true } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  const clearNews = async () => {
    try {
      await users.updateMany(
        {},
        { $set: { news: [] } }
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    createIfNotExists,
    getAll,
    getByTelegramId,
    getByTelegramUsername,
    getById,
    pushSubject,
    pushMessage,
    pushNews,
    updateField,
    setNewsAsSent,
    clearNews
  }
}
