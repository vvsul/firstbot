const TelegramBot = require('node-telegram-bot-api')
const bot=new TelegramBot('7067643874:AAElCtUoH86h29QsEIH8ul2h6krY8PBdlSE', {polling: true})
const os=require ('os')

bot.on('message', msg=>{
    bot.sendMessage(msg.chat.id, `Привет из  ${os.type()},бот приветствует "${msg.from.first_name}"`)
})