module.exports = db => {
  const admins = db.collection('admins')

  const getByTelegramId = async telegramId => {
    try {
      const admin = await admins.findOne({ 'telegram.id': telegramId })

      return admin
    } catch(error) {
      throw new Error(error)
    }
  }

  return {
    getByTelegramId
  }
}