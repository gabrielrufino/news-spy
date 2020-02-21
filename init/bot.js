const Telegraf = require('telegraf')
const session = require('telegraf/session')

const { BOT_TOKEN } = process.env

const bot = new Telegraf(BOT_TOKEN)
bot.use(session())

module.exports = bot
