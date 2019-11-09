const mongodb = require('mongodb')

const {
  DATABASE_URL,
  DATABASE_USER,
  DATABASE_PASS,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME
} = process.env

const MongoClient = mongodb.MongoClient
const url = DATABASE_URL || `mongodb://${DATABASE_USER}:${DATABASE_PASS}@${DATABASE_HOST}:${DATABASE_PORT}`

const client = new MongoClient(url, {
  useUnifiedTopology: true
})

const connect = async () => {
  try {
    await client.connect()

    const db = client.db(DATABASE_NAME)

    return db
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = connect
