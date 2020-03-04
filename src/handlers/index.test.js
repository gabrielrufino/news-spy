const handlers = require('./index')

describe('Tests for the index.js file', () => {
  test('Should be a function', () => {
    expect(handlers).toBeInstanceOf(Function)
  })

  test('Should return an object', () => {
    const modules = {
      bot: {
        command: jest.fn()
      }
    }
    const returned = handlers(modules)

    expect(returned).toBeInstanceOf(Object)
  })
})
