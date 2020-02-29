const repositories = require('./index')

describe('Tests for the index.js file', () => {
  test('Should be a function', () => {
    expect(repositories).toBeInstanceOf(Function)
  })

  test('Should return an object', () => {
    const db = {
      collection: jest.fn()
    }

    const returned = repositories(db)

    expect(returned).toBeInstanceOf(Object)
  })
})
