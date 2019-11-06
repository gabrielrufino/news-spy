const mongodb = require('mongodb')

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME
} = process.env

const MongoClient = mongodb.MongoClient
const url = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}`

const client = new MongoClient(url)

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
