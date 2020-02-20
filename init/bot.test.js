const Telegraf = require('telegraf')

const bot = require('./bot')

describe('Tests to the bot file', () => {
  test('Should be a Telegraf', () => {
    expect(bot).toBeInstanceOf(Telegraf)
  })
})