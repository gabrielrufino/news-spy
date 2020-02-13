const init = require('./index')

describe('Tests to the index file of the init layer', () => {
  test('Should be a function', () => {
    expect(init).toBeInstanceOf(Function)
  })

  test('Should return a Promise', () => {
    const returned = init()
    expect(returned).toBeInstanceOf(Promise)
  })
})
