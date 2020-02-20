const events = require('./index')

describe('Tests for the index.js file', () => {
  test('Should be a function', () => {
    expect(events).toBeInstanceOf(Function)
  })
})
