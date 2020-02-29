const services = require('./index')

describe('Tests for the index.js file', () => {
  test('Should be a function', () => {
    expect(services).toBeInstanceOf(Function)
  })
})
