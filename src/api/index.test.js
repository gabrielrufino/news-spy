const api = require('./index')

describe('Tests for the index.js file', () => {
  test('Should be a function', () => {
    expect(api).toBeInstanceOf(Function)
  })
})
