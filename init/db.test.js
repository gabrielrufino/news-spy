const db = require('./db')

describe('Tests for the db.js file', () => {
  test('Should be a function', () => {
    expect(db).toBeInstanceOf(Function)
  })

  test('Should return a Promise', () => {
    const returned = db()

    expect(returned).toBeInstanceOf(Promise)
  })
})
