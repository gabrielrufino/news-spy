const jobs = require('./index')

describe('Tests for the index.js file', () => {
  test('Should be a function', () => {
    expect(jobs).toBeInstanceOf(Function)
  })
})